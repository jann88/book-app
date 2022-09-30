import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'react-router-dom';
function BookList() {
const[books, setBooks]= useState([])

useEffect(()=>{
    fetch(" http://localhost:4001/books")
    .then(response => response.json())
    .then(data => setBooks(data))
},[])
return(
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Publication</TableCell>
            <TableCell align="right">Edition</TableCell>

            <TableCell align="right">View</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.author}</TableCell>
              <TableCell align="right">{row.publication}</TableCell>
              <TableCell align="right">{row.edition}</TableCell>
              <TableCell align="right"><Link to= "/book">{row.view}</Link></TableCell>
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


// return(

//     <table>
//  <tr>
//  <th scope="col">Title</th>
//         <th scope="col">Author</th>
//         <th scope="col">Publication</th>
//         <th scope="col">Edition </th>
//       </tr>
//         {
//             (Array.isArray(books)? books: []).map((book)=>{
//                 return(
                    
//     <tr>
//       <th scope="row">{book.id}</th>
//       <td>Title{book.title}</td>
//       <td>Author{book.author}</td>
//       <td>Publication{book.publication}</td>
//       <td>Edition{book.edition}</td>
//     </tr>
    
//                 )
//             })
//         }
     
       
//     </table>
//   );

export default BookList;
