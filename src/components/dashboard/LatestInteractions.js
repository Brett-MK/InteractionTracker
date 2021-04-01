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
                  Customer Status
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
                  <TableCell>
                    {interaction.callData.callerName}
                  </TableCell>
                  <TableCell>
                    {interaction.customerStatus}
                  </TableCell>
                  <TableCell>
                    {interaction.agentData.agentName}
                  </TableCell>
                  <TableCell>
                    {interaction.callData.direction}
                  </TableCell>
                  <TableCell>
                    {`${interaction.duration.value} ${interaction.duration.unit.toLowerCase()}`}
                  </TableCell>
                  <TableCell>
                    {`${interaction.waitingTime.value} ${interaction.waitingTime.unit.toLowerCase()}`}
                  </TableCell>
                  <TableCell>
                    {moment(interaction.timestamp).format('MM/DD/YYYY')}
                  </TableCell>
                  <TableCell>
                    <Chip
                      color={interaction.issueStatus === 'Pending' ? 'error' : 'primary'}
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
