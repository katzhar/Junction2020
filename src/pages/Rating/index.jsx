import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './rating.module.scss';
import { data } from '../../data';

export default function Rating() {
  // const countRating = (academ, extra) => {
  //   let sum = 0;
  //   let sum2 = 0
  //   Object.keys(academ).forEach((elem) => {
  //       sum += academ[elem];
  //   })
  //   Object.keys(extra).forEach((elem) => {
  //       sum2 += extra[elem];
  //   })
  //   return sum + sum2;
  // }
  return (
    <TableContainer className={styles.table} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Place</TableCell>
            <TableCell align="center">Users</TableCell>
            <TableCell align="center">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.users.map((row, i) => (
            <TableRow key={row.id}>
              <TableCell width={100} align="center">{++i}</TableCell>
              <TableCell align="center">{row.name.first} {row.name.last}</TableCell>
              <TableCell align="center">{row.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
