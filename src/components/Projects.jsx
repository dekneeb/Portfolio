import * as FiIcons from 'react-icons/fi'
import * as BsIcons from 'react-icons/bs'

const Project = () =>{
    return(
        <div className='projects' id='projects'>
            <h4><span>Projects</span></h4>
            <div className='projcontainer'>
            <div className='thumbnail'>
                <a href='https://dekneeb.github.io/War/'><img className='photo projectsicon' src="war.png"></img>
                <div className='overlay'>
                    <div className='description'>Tech Stack: Javascript, HTML, CSS</div>
                    <div className='words'>Browser adaptation of the classic card game War. Built on week 3 of GA bootcamp. </div>
                </div>
                </a>
            </div>
            <div className='thumbnail'>
                <a href='https://github.com/dekneeb/TablesofContents'><img className='photo projectsicon' src="tables.png"></img>
                <div className='overlay'>
                    <div className='description'>Tech Stack: EJS, Node JS, Express, MongoDB</div>
                    <div className='words'>A website users can add, edit, and categorize recipes. Group project in week 6.</div>
                </div>
                </a>
            </div>
            <div className='thumbnail'>
                <a href='https://friendly-babbage-f70de5.netlify.app/'><img className='photo projectsicon' src="brewtour.jpg"></img>
                <div className='overlay'>
                    <div className='description'>Tech Stack: React, Brewery API </div>
                    <div className='words'>A search engine for nearby Breweries. Users can favorite certain breweries and keep a running list of ones already visited, as well as directly access websites and get directions.</div>
                </div>
                </a>
            </div>
            <div className='thumbnail'>
                <a href='https://i-do-two.herokuapp.com/'><img className='photo projectsicon' src="Idotwo.png"></img>
                <div className='overlay'>
                    <div className='description'>Tech Stack: Django, PostreSQL, Python, AWS, Bootstrap</div>
                    <div className='words'>Niche resale website for weddings. Users can comment and direct/private message for exchange of items.</div>
                    <span><FiIcons.FiGithub/><BsIcons.BsGlobe/></span>
                    

                </div>
                </a>
            </div>
            </div>
        </div>

    );
}


export default Project