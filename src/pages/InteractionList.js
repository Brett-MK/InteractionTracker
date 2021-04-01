import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import axios from 'axios';
import InteractionListResults from 'src/components/interactions/InteractionListResults';
import InteractionListToolbar from 'src/components/interactions/InteractionListToolbar';
import CircularProgressIndicator from 'src/components/CircularProgressIndicator';

const InteractionList = () => {
  const [interactions, setInteractions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const interactionsResponse = await axios.get('https://localhost:5001/api/interactions');

      setInteractions(interactionsResponse.data);
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return (
      <CircularProgressIndicator />
    );
  }
  return (
    <>
      <Helmet>
        <title>Interactions | Interaction Tracker</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <InteractionListToolbar />
          <Box sx={{ pt: 3 }}>
            <InteractionListResults interactions={interactions} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default InteractionList;
