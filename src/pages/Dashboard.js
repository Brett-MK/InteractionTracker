import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import TotalWaitTime from 'src/components/dashboard/TotalWaitTime';
import LatestInteractions from 'src/components/dashboard/LatestInteractions';
import IssuesResolved from 'src/components/dashboard/IssuesResolved';
import TotalInteractions from 'src/components/dashboard/TotalInteractions';
import TrafficByCustomerStatus from 'src/components/dashboard//TrafficByCustomerStatus';
import interactions from 'src/__mocks__/interactions';
import latestMonthReport from 'src/__mocks__/latestMonthReport';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Interaction Tracker</title>
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
            <TotalInteractions totalInteractions={latestMonthReport.totalInteractions} />
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <TotalWaitTime totalWaitTime={latestMonthReport.totalWaitTime} />
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <IssuesResolved issuesResolved={latestMonthReport.issuesResolved} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestInteractions interactions={interactions.slice(0, 8)} />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <TrafficByCustomerStatus sx={{ height: '100%' }} trafficByCustomerStatus={latestMonthReport.trafficByCustomerStatus} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
