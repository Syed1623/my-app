import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'


function App() {
  const [Mode, setMode] = useState('light');
  const [text, settext] = useState('dark mode');
  const togglemode = ()=>{
    if(Mode==='light'){
      setMode('dark');
      settext('Light Mode');
      document.body.style.backgroundColor = 'rgb(48,48,48)';
    }
    else{
      setMode('light');
      settext('Dark Mode');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title="Textutils" element1="Home" element2="about textutils" element3="Contact us" element4="Others" text={text} Mode={Mode} togglemode={togglemode}> </Navbar>
    <div className="container my-3">
    <TextForm heading="enter text to analiyze" Mode={Mode} togglemode={togglemode}></TextForm>
    </div>
    <div className="container">
      <About Mode={Mode} togglemode={togglemode}/>
    </div>
    </>
  );
}

export default App;
