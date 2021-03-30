import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import InteractionListResults from 'src/components/interactions/InteractionListResults';
import InteractionListToolbar from 'src/components/interactions/InteractionListToolbar';
import interactions from 'src/__mocks__/interactions';

const InteractionList = () => (
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

export default InteractionList;
