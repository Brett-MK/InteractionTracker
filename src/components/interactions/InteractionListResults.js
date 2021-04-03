import { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  Chip,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';

const InteractionListResults = ({ interactions, ...rest }) => {
  const [selectedInteractionIds, setSelectedInteractionIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedInteractionIds;

    if (event.target.checked) {
      newSelectedInteractionIds = interactions.map((interaction) => interaction.callId);
    } else {
      newSelectedInteractionIds = [];
    }

    setSelectedInteractionIds(newSelectedInteractionIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedInteractionIds.indexOf(id);
    let newSelectedInteractionIds = [];

    if (selectedIndex === -1) {
      newSelectedInteractionIds = newSelectedInteractionIds.concat(selectedInteractionIds, id);
    } else if (selectedIndex === 0) {
      newSelectedInteractionIds = newSelectedInteractionIds.concat(selectedInteractionIds.slice(1));
    } else if (selectedIndex === selectedInteractionIds.length - 1) {
      newSelectedInteractionIds = newSelectedInteractionIds.concat(selectedInteractionIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedInteractionIds = newSelectedInteractionIds.concat(
        selectedInteractionIds.slice(0, selectedIndex),
        selectedInteractionIds.slice(selectedIndex + 1)
      );
    }

    setSelectedInteractionIds(newSelectedInteractionIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedInteractionIds.length === interactions.length}
                    color="primary"
                    indeterminate={
                      selectedInteractionIds.length > 0
                      && selectedInteractionIds.length < interactions.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Customer
                </TableCell>
                <TableCell>
                  CallId
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                  Number
                </TableCell>
                <TableCell>
                  CC Number
                </TableCell>
                <TableCell>
                  Agent Id
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Direction
                </TableCell>
                <TableCell>
                  Duration
                </TableCell>
                <TableCell>
                  Wait
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
              {interactions.slice(page * limit, page * limit + limit).map((interaction) => (
                <TableRow
                  hover
                  key={interaction.callId}
                  selected={selectedInteractionIds.indexOf(interaction.callId) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedInteractionIds.indexOf(interaction.callId) !== -1}
                      onChange={(event) => handleSelectOne(event, interaction.callId)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={interaction.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(interaction.callData.callerName)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {interaction.callData.callerName}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {interaction.callId}
                  </TableCell>
                  <TableCell>
                    {interaction.customerStatus}
                  </TableCell>
                  <TableCell>
                    {interaction.callData.callerNumber}
                  </TableCell>
                  <TableCell>
                    {interaction.callData.ccNumber}
                  </TableCell>
                  <TableCell>
                    {interaction.agentData.agentId}
                  </TableCell>
                  <TableCell>
                    {interaction.agentData.agentName}
                  </TableCell>
                  <TableCell>
                    {interaction.agentData.agentEmail}
                  </TableCell>
                  <TableCell>
                    {interaction.callData.direction}
                  </TableCell>
                  <TableCell>
                    {`${interaction.duration.value.toLocaleString('en')} ${interaction.duration.unit.toLowerCase()}`}
                  </TableCell>
                  <TableCell>
                    {`${interaction.waitingTime.value.toLocaleString('en')} ${interaction.waitingTime.unit.toLowerCase()}`}
                  </TableCell>
                  <TableCell>
                    {moment.utc(interaction.timestamp).local().format('MM/DD hh:mm a')}
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
      <TablePagination
        component="div"
        count={interactions.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

InteractionListResults.propTypes = {
  interactions: PropTypes.array.isRequired
};

export default InteractionListResults;
