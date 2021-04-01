import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  useTheme
} from '@material-ui/core';
import PropTypes from 'prop-types';
import NotificationImportant from '@material-ui/icons/NotificationImportant';
import PersonIcon from '@material-ui/icons/Person';
import LowPriority from '@material-ui/icons/LowPriority';

const TrafficByCustomerStatus = ({ totalInteractions, trafficByCustomerStatus, ...rest }) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [trafficByCustomerStatus.lowPriority, trafficByCustomerStatus.normal, trafficByCustomerStatus.vip],
        backgroundColor: [
          colors.orange[600],
          colors.indigo[500],
          colors.red[600],
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Low Priority', 'Normal', 'VIP']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const customerStatuses = [
    {
      title: 'Low Priority',
      value: trafficByCustomerStatus.lowPriority,
      icon: LowPriority,
      color: colors.orange[600]
    },
    {
      title: 'Normal',
      value: trafficByCustomerStatus.normal,
      icon: PersonIcon,
      color: colors.indigo[500]
    },
    {
      title: 'VIP',
      value: trafficByCustomerStatus.vip,
      icon: NotificationImportant,
      color: colors.red[600]
    }
  ];

  return (
    <Card {...rest}>
      <CardHeader title="Traffic by Customer Status Today" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          { totalInteractions > 0 ? (
            <Doughnut
              data={data}
              options={options}
            />
          )
            : '' }
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {customerStatuses.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              <Icon color="action" />
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h2"
              >
                {value}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

TrafficByCustomerStatus.propTypes = {
  trafficByCustomerStatus: PropTypes.object.isRequired,
  totalInteractions: PropTypes.number.isRequired
};

export default TrafficByCustomerStatus;
