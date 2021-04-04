import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const LatestInteractions = ({ interactions, ...rest }) => {
  const navigate = useNavigate();

  return (
    <Card {...rest}>
      <CardHeader title="Latest Interactions" />
      <Divider />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Customer
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                  Agent
                </TableCell>
                <TableCell>
                  Direction
                </TableCell>
                <TableCell>
                  Duration
                </TableCell>
                <TableCell>
                  Waiting Time
                </TableCell>
                <TableCell>
                  Date
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {interactions.map((interaction) => (
                <TableRow
                  hover
                  key={interaction.callId}
                >
                  <TableCell style={{ whiteSpace: 'nowrap' }}>
                    {interaction.callData.callerName}
                  </TableCell>
                  <TableCell style={{ whiteSpace: 'nowrap' }}>
                    {interaction.customerStatus}
                  </TableCell>
                  <TableCell style={{ whiteSpace: 'nowrap' }}>
                    {interaction.agentData.agentName}
                  </TableCell>
                  <TableCell style={{ whiteSpace: 'nowrap' }}>
                    {interaction.callData.direction}
                  </TableCell>
                  <TableCell style={{ whiteSpace: 'nowrap' }}>
                    {`${interaction.duration.value.toLocaleString('en')} ${interaction.duration.unit.toLowerCase()}`}
                  </TableCell>
                  <TableCell style={{ whiteSpace: 'nowrap' }}>
                    {`${interaction.waitingTime.value.toLocaleString('en')} ${interaction.waitingTime.unit.toLowerCase()}`}
                  </TableCell>
                  <TableCell style={{ whiteSpace: 'nowrap' }}>
                    {moment.utc(interaction.timestamp).local().format('M/DD h:mm a')}
                  </TableCell>
                  <TableCell>
                    <Chip
                      style={interaction.issueStatus === 'Pending' ? { backgroundColor: '#E53935', color: 'white' } : { backgroundColor: '#5664D2', color: 'white' }}
                      label={interaction.issueStatus}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
          onClick={() => navigate('/app/interactions')}
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

LatestInteractions.propTypes = {
  interactions: PropTypes.array.isRequired
};

export default LatestInteractions;
