/* eslint-disable react/prop-types */
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const UsersTable = ({ rows, selectedUser, deleteUser }) => {
  return (
      <TableContainer component={Paper}>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Action</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {rows.length > 0 ? (
                      rows.map((row) => (
                          <TableRow
                              key={row.id}
                              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                          >
                              <TableCell>{row.id}</TableCell>
                              <TableCell>{row.name}</TableCell>
                              <TableCell>
                                  <Button
                                      variant="outlined"
                                      color="primary"
                                      sx={{ marginRight: "10px" }}
                                      onClick={() => selectedUser(row)}
                                  >
                                      Update
                                  </Button>
                                  <Button
                                      variant="outlined"
                                      color="secondary"
                                      onClick={() => deleteUser(row.id)}
                                  >
                                      Delete
                                  </Button>
                              </TableCell>
                          </TableRow>
                      ))
                  ) : (
                      <TableRow>
                          <TableCell colSpan={3} align="center">
                              No Data Available
                          </TableCell>
                      </TableRow>
                  )}
              </TableBody>
          </Table>
      </TableContainer>
  );
};

export default UsersTable;
