import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CallListResults from 'src/components/calls/CallListResults';
import CallListToolbar from 'src/components/calls/CallListToolbar';
import customers from 'src/__mocks__/customers';

const CustomerList = () => (
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
        <CallListToolbar />
        <Box sx={{ pt: 3 }}>
          <CallListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default CustomerList;
