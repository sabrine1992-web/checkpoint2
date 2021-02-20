import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import image3 from"./image3.jpg"
import stylesheet from './stylesheet'


function App() {
  return (
    <div className="App">
    <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
    <h1 className='title'>Your name here</h1>
  
    <img src={image3} alt="img3" />
   
    <img src="/image1.jpg" alt="img1" />
   
    <iframe width="560" height="315" src="https://www.youtube.com/embed/O2wTaUtmqXw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   
   </div>
   </div>
  );
}

export default App;
