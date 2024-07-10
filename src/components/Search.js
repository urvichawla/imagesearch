import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {useState} from 'react';

const Search=({searchText})=>{
    const [text,setText]=useState("");
    const onSubmit=(e)=>{
        e.preventDefault();
        searchText(text);
    }
    return (
        <Form onSubmit={onSubmit} style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
        
        
            <Form.Control onChange={e=>setText(e.target.value)} placeholder="Search your image here" style={{height: "1.4rem" ,borderRadius:"0.25rem", boxShadow:"4px 4px 0.25px lightgrey"}} />
          
          
          <Button  variant="success" type="submit" style={{marginLeft: "1rem",width: "4rem" ,borderRadius:"0.25rem",backgroundColor:"Teal",color: "white"}}>
        Submit
      </Button>
     
      
          </Form>
         
    )

}
export default Search;