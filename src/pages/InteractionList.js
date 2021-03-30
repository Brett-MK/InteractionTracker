import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import InteractionListResults from 'src/components/calls/InteractionListResults';
import InteractionListToolbar from 'src/components/calls/InteractionListToolbar';
import customers from 'src/__mocks__/customers';

const InteractionList = () => (
  <>
    <Helmet>
      <title>Customers | Material Kit</title>
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
          <InteractionListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default InteractionList;
