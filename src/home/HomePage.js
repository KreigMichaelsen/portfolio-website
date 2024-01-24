import { Button } from "reactstrap"
import "./HomePage.css"
import { AboutMe } from "../about/AboutMe"
import { Projects } from "../projects/Projects"

export const HomePage = () => {
	return (

        <div className="homePageContainer">

            <h1 className="homePageTitle">Hi! I'm Kreig Michaelsen</h1>
            <h3 className="homePageSubtitle">I’m a software developer who loves building things and learning code</h3>
            {/* <AboutMe />
            <Projects /> */}
           
            
        </div>
    )
    
}