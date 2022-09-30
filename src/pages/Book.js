import React from 'react';
import { useParams } from "react-router-dom"
import {useEffect, useState} from 'react'
function Book () {
    const {id} = useParams()
const[book, setBook] = useState({})

    useEffect(()=> {
        fetch (`http://localhost:4001/books/${id}`)

        .then(response => response.json())
        .then( data => setBook(data))

    },[])
    // console.log(book)
    return(
                
    <tr>
    <th scope="row">{book.id}</th>
    <td>Title{book.title}</td>
    <td>Author{book.author}</td>
    <td>Publication{book.publication}</td>
    <td>Edition{book.edition}</td>
  </tr>
    
    )
}

export default Book