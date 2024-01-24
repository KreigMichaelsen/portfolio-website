import { Button } from "reactstrap"

import "./Projects.css"

export const Projects = () => {
	return (

        <div className="projectPageContainer">
            <div>
            <h1 className="projectPageTitle">Projects</h1>
            </div>
            <div className="projectsContainer">
            <div className="project1Container">
            <h2 className="project1Title">Good As Done</h2>
            <img className="project1Picture" src="Screen Shot 2024-01-12 at 2.54.07 PM.png" width="500" height="281"/>
            <br/>
            <Button color="dark" className="project1GithubButton" href="https://github.com/KreigMichaelsen/Good-As-Done---NSS-Back-End-Capstone" target="_blank">GitHub</Button>
            
            <p>Good As Done is a full-stack application made with React, C#, ASP.NET, and PostgreSQL. It is a project/task management software that allows users to keep track of the things they need to do in their life and get it done. It allows user to create and collaborate on projects, as well as create to-do lists and notes 
            </p>
            </div>

            <div className="project2Container">
            <h2 className="project2Title">Coffee Keep Up</h2>
            <img  className="project2Picture" src="Screen Shot 2024-01-12 at 2.51.57 PM.png" width="500" height="281"/>
            <br/>
            <Button color="dark" className="project1GithubButton" href="https://github.com/KreigMichaelsen/Coffee-Keep-Up---NSS-Front-End-Capstone" target="_blank">GitHub</Button>
            
            <p>Coffee Keep Up is a React based application that allows users to favorite, review, and keep track of coffee shops that they have been to in the Nashville area. It allows users to create a profile, view a list of coffee shops, and add coffee shops to a personal user list. They can then review each coffee shop and post that review. The app was created using React, JavaScript, and HTML. The styling was accomplished using CSS.
            </p>
            
            </div>
            
            </div>
            
        </div>
    )
    
}