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
      newSelectedInteractionIds = interactions.map((interaction) => interaction.id);
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
              {interactions.slice(0, limit).map((interaction) => (
                <TableRow
                  hover
                  key={interaction.id}
                  selected={selectedInteractionIds.indexOf(interaction.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedInteractionIds.indexOf(interaction.id) !== -1}
                      onChange={(event) => handleSelectOne(event, interaction.id)}
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
