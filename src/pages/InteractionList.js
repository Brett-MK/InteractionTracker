import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import axios from 'axios';
import InteractionListResults from 'src/components/interactions/InteractionListResults';
import InteractionListToolbar from 'src/components/interactions/InteractionListToolbar';
import CircularProgressIndicator from 'src/components/CircularProgressIndicator';
import { useAuth } from '../contexts/AuthContext';

const InteractionList = () => {
  const [interactions, setInteractions] = useState([]);
  const [loading, setLoading] = useState(true);

  const { getIdToken } = useAuth();

  useEffect(() => {
    let unmounted = false;

    const getData = async () => {
      const idToken = await getIdToken();
      const interactionsResponse = await axios.get('https://localhost:5001/api/interactions', {
        headers: {
          Authorization: `Bearer ${idToken}`,
        }
      });

      if (!unmounted) {
        setInteractions(interactionsResponse.data);
        setLoading(false);
      }
    };

    getData();

    return () => { unmounted = true; };
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
