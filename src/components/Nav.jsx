import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'


const Nav=()=>{
    return(
        <div className="nav">
           
            <ScrollLink to='about' spy={true} smooth={true} offset={-50} duration={400} >
                        <h3 className='nav-about px-2'>About</h3>
                    </ScrollLink> 
                    
          <ScrollLink to='projects' spy={true} smooth={true} offset={-50} duration={400} >
                        <h3 className='nav-about px-2'>Projects</h3>
                    </ScrollLink>
                    
           
        </div>

    );
}

export default Nav;