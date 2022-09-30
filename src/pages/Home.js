import React from "react";
import { useState } from "react";
import { useEffect } from "react";
function Home() {
const[books, setBooks]= useState([])

useEffect(()=>{
    fetch(" http://localhost:4001/books")
    .then(response => response.json())
    .then(data => setBooks(data))
},[])
return(
    <table>
 <tr>
 <th scope="col">title</th>
        <th scope="col">Author</th>
        <th scope="col">Publication</th>
        <th scope="col">Edition </th>
      </tr>
        {
            (Array.isArray(books)? books: []).map((book)=>{
                return(
                    
    <tr>
      <th scope="row">{book.id}</th>
      <td>title{book.title}</td>
      <td>author{book.author}</td>
      <td>Publication{book.publication}</td>
      <td>Edition{book.edition}</td>
    </tr>
    
                )
            })
        }
     
       
    </table>
  );
}
export default Home;
