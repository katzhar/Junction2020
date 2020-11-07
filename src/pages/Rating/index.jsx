import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { data } from '../../data';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell width={200} align="center">Place</StyledTableCell>
            <StyledTableCell align="center">Users</StyledTableCell>
            <StyledTableCell align="center">Points</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.users.map((row, i) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center" component="th" scope="row">
                {++i}
              </StyledTableCell>
              <StyledTableCell align="center">{row.name.first} {row.name.last}</StyledTableCell>
              <StyledTableCell align="center">{row.rating}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  // return (
  //       <TableContainer className={styles.table} component={Paper}>
  //         <Table aria-label="simple table">
  //           <TableHead>
  //             <TableRow>
  //               <TableCell align="center">Place</TableCell>
  //               <TableCell align="center">Users</TableCell>
  //               <TableCell align="center">Points</TableCell>
  //             </TableRow>
  //           </TableHead>
  //           <TableBody>
  //             {data.users.map((row, i) => (
  //               <TableRow key={row.id}>
  //                 <TableCell width={100} align="center">{++i}</TableCell>
  //                 <TableCell align="center">{row.name.first} {row.name.last}</TableCell>
  //                 <TableCell align="center">{row.rating}</TableCell>
  //               </TableRow>
  //             ))}
  //           </TableBody>
  //         </Table>
  //       </TableContainer>
  //     );


}
