import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
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

const interactions = [
  {
    callId: uuid(),
    timestamp: 1555016400000,
    duration: {
      unit: 'seconds',
      value: '96'
    },
    waitingTime: {
      unit: 'minutes',
      value: '96'
    },
    agentData: {
      agentId: uuid(),
      agentName: 'Brett Knadle',
      agentEmail: 'brett182x@gmail.com'
    },
    callData: {
      direction: 'inbound',
      callerName: 'Ekaterina Tankova',
      callerNumber: '+19876543210',
      issueStatus: 'pending'
    },
    customerStatus: 'Low Priority',
  },
  {
    callId: uuid(),
    timestamp: 1555016400000,
    duration: {
      unit: 'seconds',
      value: '96'
    },
    waitingTime: {
      unit: 'minutes',
      value: '96'
    },
    agentData: {
      agentId: uuid(),
      agentName: 'Brett Knadle',
      agentEmail: 'brett182x@gmail.com'
    },
    callData: {
      direction: 'inbound',
      callerName: 'Ekaterina Tankova',
      callerNumber: '+19876543210',
      issueStatus: 'pending'
    },
    customerStatus: 'Low Priority',
  },
  {
    callId: uuid(),
    timestamp: 1555016400000,
    duration: {
      unit: 'seconds',
      value: '96'
    },
    waitingTime: {
      unit: 'minutes',
      value: '96'
    },
    agentData: {
      agentId: uuid(),
      agentName: 'Brett Knadle',
      agentEmail: 'brett182x@gmail.com'
    },
    callData: {
      direction: 'inbound',
      callerName: 'Ekaterina Tankova',
      callerNumber: '+19876543210',
      issueStatus: 'pending'
    },
    customerStatus: 'Low Priority',
  },
  {
    callId: uuid(),
    timestamp: 1555016400000,
    duration: {
      unit: 'seconds',
      value: '96'
    },
    waitingTime: {
      unit: 'minutes',
      value: '96'
    },
    agentData: {
      agentId: uuid(),
      agentName: 'Brett Knadle',
      agentEmail: 'brett182x@gmail.com'
    },
    callData: {
      direction: 'inbound',
      callerName: 'Ekaterina Tankova',
      callerNumber: '+19876543210',
      issueStatus: 'pending'
    },
    customerStatus: 'Low Priority',
  },
  {
    callId: uuid(),
    timestamp: 1555016400000,
    duration: {
      unit: 'seconds',
      value: '96'
    },
    waitingTime: {
      unit: 'minutes',
      value: '96'
    },
    agentData: {
      agentId: uuid(),
      agentName: 'Brett Knadle',
      agentEmail: 'brett182x@gmail.com'
    },
    callData: {
      direction: 'inbound',
      callerName: 'Ekaterina Tankova',
      callerNumber: '+19876543210',
      issueStatus: 'pending'
    },
    customerStatus: 'Low Priority',
  },
  {
    callId: uuid(),
    timestamp: 1555016400000,
    duration: {
      unit: 'seconds',
      value: '96'
    },
    waitingTime: {
      unit: 'minutes',
      value: '96'
    },
    agentData: {
      agentId: uuid(),
      agentName: 'Brett Knadle',
      agentEmail: 'brett182x@gmail.com'
    },
    callData: {
      direction: 'inbound',
      callerName: 'Ekaterina Tankova',
      callerNumber: '+19876543210',
      issueStatus: 'pending'
    },
    customerStatus: 'Low Priority',
  }
];

const LatestInteractions = (props) => (
  <Card {...props}>
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
                Call Time
              </TableCell>
              <TableCell>
                Wait Time
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

export default LatestInteractions;
