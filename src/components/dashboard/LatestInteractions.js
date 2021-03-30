import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
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
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const LatestInteractions = ({ interactions, ...rest }) => (
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
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Date
                  </TableSortLabel>
                </Tooltip>
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
                  {`${interaction.duration.value} ${interaction.duration.unit}`}
                </TableCell>
                <TableCell>
                  {`${interaction.waitingTime.value} ${interaction.waitingTime.unit}`}
                </TableCell>
                <TableCell>
                  {moment(interaction.timestamp).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell>
                  <Chip
                    color="primary"
                    label={interaction.callData.issueStatus}
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
      >
        View all
      </Button>
    </Box>
  </Card>
);

LatestInteractions.propTypes = {
  interactions: PropTypes.array.isRequired
};

export default LatestInteractions;
