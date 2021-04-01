import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { orange } from '@material-ui/core/colors';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

const IssuesResolved = ({ totalInteractions, issuesResolved, ...rest }) => (
  <Card
    sx={{ height: '100%' }}
    {...rest}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            ISSUES RESOLVED TODAY
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            {`${issuesResolved}/${totalInteractions}`}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: orange[600],
              height: 56,
              width: 56
            }}
          >
            <InsertChartIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
        <LinearProgress
          value={(issuesResolved / totalInteractions) * 100}
          variant="determinate"
        />
      </Box>
    </CardContent>
  </Card>
);

IssuesResolved.propTypes = {
  totalInteractions: PropTypes.number.isRequired,
  issuesResolved: PropTypes.number.isRequired
};

export default IssuesResolved;
