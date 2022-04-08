import { Link } from 'react-router-dom';
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import * as FaIcons from 'react-icons/fa'


const Nav=()=>{



    


    return(
        <div className='container'>
        <div className="nav active">
            
            
            <ScrollLink to='home' spy={true} smooth={true} offset={-50} duration={400} >
                        <h3 className='nav-about px-2'>Home</h3>
                    </ScrollLink> 
           
            <ScrollLink to='about' spy={true} smooth={true} offset={-50} duration={400} >
                        <h3 className='nav-about px-2'>About</h3>
                    </ScrollLink> 
                    
            <ScrollLink to='projects' spy={true} smooth={true} offset={-50} duration={400} >
                        <h3 className='nav-about px-2'>Projects</h3>
                    </ScrollLink>

            <a  href={require('../images/resume.pdf')}><h3 className='nav-about px-2'>Resume</h3></a>
                    
           
        </div>
        </div>

    );
}

export default Nav;