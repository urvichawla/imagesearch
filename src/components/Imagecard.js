import React from 'react';
import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
const Imagecard=({image})=>{
  const tags=image.tags.split(',');
    return(
        <Card style={{ width: '17rem',height:'24rem' ,border: '2px solid black', borderRadius: '10px',boxShadow:'3px 3px #888888 '}}>
        <Card.Img variant="top" src={image.webformatURL}  style={{  width: '17rem',height: '15rem' }}/>
        <Card.Body style={{backgroundColor:"lightpink"}}>
          <Card.Title style={{color: 'red', marginLeft: '10px', fontWeight: 'bold'}}>Photo by {image.user}</Card.Title>
          
          <ul>
            <li style={{color: 'black'}}>Views: {image.views}</li>
            <li>Downloads: {image.downloads}</li>
            <li>Likes: {image.likes}</li>
          </ul>
          <div className="d-flex align-items-center justify-content-center">
                    {tags.map((tag, index) => (
                        <Button
                            key={index}
                            variant="light"
                            style={{
                                marginLeft: '8px',
                                marginRight: '7px',
                                backgroundColor: 'teal',
                                color: 'white',
                                borderRadius: '5px',
                                height: '20px',
                            }}
                        >
                            #{tag}
                        </Button>
                    ))}
                </div>

          
          
          

        </Card.Body>
      </Card>
  )
}
    



export default Imagecard;