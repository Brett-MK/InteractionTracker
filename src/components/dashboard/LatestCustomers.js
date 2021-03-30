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

const calls = [
  {
    id: uuid(),
    callTimeInMinutes: 30,
    waitingTimeInMinutes: 15,
    callDateTime: 1555016400000,
    callDirection: 'inbound',
    agent: {
      name: 'Brett Knadle',
      email: 'brett182x@gmail.com'
    },
    customer: {
      name: 'Ekaterina Tankova',
      status: 'Low Priority'
    },
    status: 'pending'
  },
  {
    id: uuid(),
    callTimeInMinutes: 25,
    waitingTimeInMinutes: 12,
    callDateTime: 1555016400000,
    callDirection: 'inbound',
    agent: {
      name: 'Brett Knadle',
      email: 'brett182x@gmail.com'
    },
    customer: {
      name: 'Cao Yu',
      status: 'Normal'
    },
    status: 'resolved'
  },
  {
    id: uuid(),
    callTimeInMinutes: 11,
    waitingTimeInMinutes: 10,
    callDateTime: 1554930000000,
    callDirection: 'outbound',
    agent: {
      name: 'Brett Knadle',
      email: 'brett182x@gmail.com'
    },
    customer: {
      name: 'Alexa Richardson',
      status: 'VIP'
    },
    status: 'resolved'
  },
  {
    id: uuid(),
    callTimeInMinutes: 96,
    waitingTimeInMinutes: 12,
    callDateTime: 1554757200000,
    callDirection: 'inbound',
    agent: {
      name: 'Brett Knadle',
      email: 'brett182x@gmail.com'
    },
    customer: {
      name: 'Anje Keizer',
      status: 'Normal'
    },
    status: 'pending'
  },
  {
    id: uuid(),
    callTimeInMinutes: 32,
    waitingTimeInMinutes: 15,
    callDateTime: 1554670800000,
    callDirection: 'outbound',
    agent: {
      name: 'Brett Knadle',
      email: 'brett182x@gmail.com'
    },
    customer: {
      name: 'Clarke Gillebert',
      status: 'Normal'
    },
    status: 'resolved'
  },
  {
    id: uuid(),
    callTimeInMinutes: 17,
    waitingTimeInMinutes: 5,
    callDateTime: 1554670800000,
    callDirection: 'outbound',
    agent: {
      name: 'Brett Knadle',
      email: 'brett182x@gmail.com'
    },
    customer: {
      name: 'Adam Denisov',
      status: 'VIP'
    },
    status: 'resolved'
  }
];

const LatestCustomers = (props) => (
  <Card {...props}>
    <CardHeader title="Latest Customer Calls" />
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
            {calls.map((call) => (
              <TableRow
                hover
                key={call.id}
              >
                <TableCell>
                  {call.customer.name}
                </TableCell>
                <TableCell>
                  {call.customer.status}
                </TableCell>
                <TableCell>
                  {call.agent.name}
                </TableCell>
                <TableCell>
                  {call.callDirection}
                </TableCell>
                <TableCell>
                  {`${call.callTimeInMinutes} minutes`}
                </TableCell>
                <TableCell>
                  {`${call.waitingTimeInMinutes} minutes`}
                </TableCell>
                <TableCell>
                  {moment(call.callDateTime).format('DD/MM/YYYY')}
                </TableCell>
                <TableCell>
                  <Chip
                    color="primary"
                    label={call.status}
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

export default LatestCustomers;
