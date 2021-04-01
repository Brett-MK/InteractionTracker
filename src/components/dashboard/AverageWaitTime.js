import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import { red, green } from '@material-ui/core/colors';

const AverageWaitTime = ({ averageWaitTime, ...rest }) => (
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
            AVERAGE WAIT TIME TODAY
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            {`${averageWaitTime.value} ${averageWaitTime.unit.toLowerCase()}`}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: red[600],
              height: 56,
              width: 56
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowDownwardIcon sx={{ color: green[900] }} />
        <Typography
          sx={{
            color: green[900],
            mr: 1
          }}
          variant="body2"
        >
          12%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since yesterday
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

AverageWaitTime.propTypes = {
  averageWaitTime: PropTypes.object.isRequired
};

export default AverageWaitTime;
