//  import FormControl from '@mui/material/FormControl';
// or
// import { FormControl } from '@mui/material';
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {FormControl, InputLabel, Input, FormHelperText} from '@mui/material';


function Editbook () {
    // const [editbook, setEditbook] = useState({})
    const {id} = useParams();

    
     const[data,setData]= useState({
        author:'',
        edition:'',
        publication:'',
        title:''
    })

    function handleChange(e){

  
        setData({...setData, [e.target.id]: e.target.value});
    }

    useEffect(() => {

        fetch(`http://localhost:4001/books/${id}`)
          .then((response) => response.json())
          .then((data) => {
           
              setData(data)
             console.log(data)
          
    
          })
          .catch((error) => console.log(error));

      }, [])
      
    
      function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:4001/books/${id}`,{
	method:'PATCH',
  	headers:{
    	'Content-Type': 'application/json'
    },
  	body:JSON.stringify(data)
})
.then(resp => resp.json())
.then(data => {
console.log(data)
setData(data)
})
    }
      

    return(
        <div>
            
            <form  onSubmit={(e)=>handleSubmit(e)}>
            <label>   Author: </label>
            <input id="author" value={data.author} onChange={e=>handleChange(e)}/>
            <label>Edition   </label>
            <input id="edition" onChange={e=>handleChange(e)}
            value={data.edition} />
<label > publication: </label>
            <input id="publication"onChange={e=>handleChange(e)} 
            value={data.publication}/>
<label >title:  </label>
            <input value={data.title} id="title"onChange={e=>handleChange(e)} />
 
 
            <button type="button display in-line padding: 15px" className="btn btn-primary">SUBMIT</button>
           
        </form>

        </div>
            
  

    )
}
export default Editbook;