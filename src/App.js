
import Nav from './components/Nav'
import Project from './components/Projects'
import Connect from './components/Connect'
import About from './components/About'
import {Link, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App" id='home'>
        <Nav/>
        <h3 className='header'> Hello World, my name is</h3>
     <h1 className='firstname'> Denee Boyd </h1>
     <h2 className='slogan'> I build things for the web.</h2>
     
    
     <About/>
     <Project/>
     <Connect/>
      <p>Built with React || Hosted on Netlify</p>
      
    </div>
  );
}

export default App;
