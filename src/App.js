
import Nav from './components/Nav'
import Project from './components/Projects'
import Connect from './components/Connect'
import About from './components/About'
import {Link, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
        <Nav/>
        <h3> Hello World, my name is</h3>
     <h1> Denee Boyd. </h1>
     <h2> I build things for the web.</h2>
     
    
     <About/>
     <Project/>
     <Connect/>
      
    </div>
  );
}

export default App;
