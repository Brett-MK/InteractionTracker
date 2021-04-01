import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
} from '@material-ui/core';
import axios from 'axios';
import AverageWaitTime from 'src/components/dashboard/AverageWaitTime';
import LatestInteractions from 'src/components/dashboard/LatestInteractions';
import IssuesResolved from 'src/components/dashboard/IssuesResolved';
import TotalInteractions from 'src/components/dashboard/TotalInteractions';
import TrafficByCustomerStatus from 'src/components/dashboard//TrafficByCustomerStatus';
import TotalDurationOfInteractions from 'src/components/dashboard/TotalDurationOfInteractions';
import CircularProgressIndicator from 'src/components/CircularProgressIndicator';

const Dashboard = () => {
  const [interactions, setInteractions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dailyReport, setDailyReport] = useState({});

  useEffect(() => {
    const getData = async () => {
      const interactionsResponse = await axios.get('https://localhost:5001/api/interactions');
      const dailyReportResponse = await axios.get('https://localhost:5001/api/reports/daily');

      setInteractions(interactionsResponse.data);
      setDailyReport(dailyReportResponse.data);
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
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TotalInteractions totalInteractions={dailyReport.totalInteractions} />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <AverageWaitTime averageWaitTime={dailyReport.averageWaitTime} />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TotalDurationOfInteractions totalDuration={dailyReport.totalDuration} />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <IssuesResolved totalInteractions={dailyReport.totalInteractions} issuesResolved={dailyReport.issuesResolved} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <LatestInteractions interactions={interactions.slice(0, 8)} />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <TrafficByCustomerStatus sx={{ height: '100%' }} totalInteractions={dailyReport.totalInteractions} trafficByCustomerStatus={dailyReport.trafficByCustomerStatus} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
