import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PhoneIcon from '@material-ui/icons/Phone';
import { indigo, red } from '@material-ui/core/colors';

const TotalDurationOfInteractions = ({ totalDuration, ...rest }) => (
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
            TOTAL DURATION OF CALLS TODAY
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            {`${Math.floor(totalDuration.value / 60000).toLocaleString('en')} minutes`}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: indigo[600],
              height: 56,
              width: 56
            }}
          >
            <PhoneIcon />
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
        <ArrowUpwardIcon sx={{ color: red[900] }} />
        <Typography
          sx={{
            color: red[900],
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

TotalDurationOfInteractions.propTypes = {
  totalDuration: PropTypes.object.isRequired
};

export default TotalDurationOfInteractions;
