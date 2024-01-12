import { Button } from "reactstrap"

import "./Projects.css"

export const Projects = () => {
	return (

        <div className="projectPageContainer">
            <h1 className="projectPageTitle">Projects</h1>
            <br/>
            

            <div className="project1Container">
            <h2>Good As Done</h2>
            <img src="404image" width="500" height="281"/>
            <br/>
            <Button color="dark" className="project1GithubButton" href="https://github.com/KreigMichaelsen/Good-As-Done---NSS-Back-End-Capstone" target="_blank">GitHub</Button>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vodluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>

            <div className="project2Container">
            <h2>Coffee Keep Up</h2>
            <img src="404image" width="500" height="281"/>
            <br/>
            <Button color="dark" className="project1GithubButton" href="https://github.com/KreigMichaelsen/Coffee-Keep-Up---NSS-Front-End-Capstone" target="_blank">GitHub</Button>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            </div>
            
            
            
        </div>
    )
    
}