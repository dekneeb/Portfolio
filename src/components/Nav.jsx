import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'


const Nav=()=>{
    return(
        <div className="nav">

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

    );
}

export default Nav;