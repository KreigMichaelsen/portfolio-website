import { Button } from "reactstrap"
import "./AboutMe.css"

export const AboutMe = () => {
	return (

        <div className="aboutMePageContainer">
            <div className="aboutMePictureAndLinksContainer">
            <img className="aboutMePicture" src="A89D5973-96C0-4EAE-8748-274104582D8C.JPG" width="250" height="300"></img>
            <h2 className="aboutMeName">Kreig Michaelsen</h2>
            <Button color="dark" className="githubButton" href="https://github.com/KreigMichaelsen" target="_blank">GitHub</Button>
            <Button color="dark" className="websiteButton" href="https://kreigmichaelsen.github.io/portfolio-website/" target="_blank">Portfolio Website</Button>
            </div>

            <div className="aboutMeTextAndTitleContainer">
            <h1 className="aboutMeTitle">About Me</h1>
            <p>Before joining Nashville Software School, I worked for several years in the A/V industry, where an interest in technology and programming was fostered. Being a naturally curious person, and one who enjoys puzzles, the problem-solving and analytic aspect of software development spoke to me. Also having the natural impulse for creativity, the creative nature of coding feels like a wonderful outlet for expression. I’m so very excited to continue to learn and grow in this field as a junior software developer.
            </p>
            <h1>Skills</h1>
            <ul className="skillsList">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Git/GitHub</li>
                <li>C#</li>
                <li>.Net</li>

            </ul>
            </div>
            
        </div>
    )
    
}