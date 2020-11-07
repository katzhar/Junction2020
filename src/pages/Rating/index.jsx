import React from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import { data } from '../../data';
// import styles from './rating.module.scss';

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// export default function CustomizedTables() {
//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell width={200} align="center">Place</StyledTableCell>
//             <StyledTableCell align="center">Users</StyledTableCell>
//             <StyledTableCell align="center">Points</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.users.map((row, i) => (
//             <StyledTableRow key={row.id}>
//               <StyledTableCell align="center" component="th" scope="row">
//                 {++i}
//               </StyledTableCell>
//               <StyledTableCell align="center">{row.name.first} {row.name.last}</StyledTableCell>
//               <StyledTableCell align="center">{row.rating}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
import { Table } from 'antd';

const columns = [
  {
    title: 'place',
    dataIndex: 'balance',
    key: 'balance',
    render: text => <a>{text}</a>,
  },
  {
    title: 'User',
    dataIndex: 'balance',
    key: 'balance',
  },
  {
    title: 'Scores',
    dataIndex: 'balance',
    key: 'balance',
  },
];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     tags: ['cool', 'teacher'],
//   },
// ];

class Rating extends React.Component {
  state = {
    top: 'topLeft',
    bottom: 'bottomRight',
  };

  render() {
    return (
      <div>
        <Table
          columns={columns}
          dataSource={data.users}
        />
      </div>
    );
  }
}

export default Rating;