
import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Imagecard from './components/Imagecard';
import  React,{useState,useEffect} from 'react';
import Search from './components/Search';

function App() {
  const [images,setImages]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [term,setTerm]=useState('');
  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=42256518-9b107c0486a6465f8cd0ef116&q=${term}&image_type=photo&pretty=true`)
    .then(res=>res.json())
    .then(data=>{
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err=>console.log(err));
  },[term]);
  return( 
    <div>
      <Search searchText={(text)=>setTerm(text)}/>
  
    <div className="container mx-auto" style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem", padding: "1rem" }}>
  
      
        {images.map(image=>(

        <Imagecard key={image.id} image={image}/>
        ))}
      </div>
      </div>
  
  )
}
export default App;
    