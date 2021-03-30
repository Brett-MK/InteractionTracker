import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import TotalWaitTime from 'src/components/dashboard/TotalWaitTime';
import LatestCustomers from 'src/components/dashboard//LatestCustomers';
import IssuesResolved from 'src/components/dashboard/IssuesResolved';
import TotalCustomers from 'src/components/dashboard//TotalCustomers';
import TrafficByCustomerStatus from 'src/components/dashboard//TrafficByCustomerStatus';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <TotalCustomers />
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <TotalWaitTime />
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <IssuesResolved />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestCustomers />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <TrafficByCustomerStatus sx={{ height: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
