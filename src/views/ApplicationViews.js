import { Route, Routes } from "react-router-dom"
import { HomePage } from "../home/HomePage"
import { Projects } from "../projects/Projects"
import { AboutMe } from "../about/AboutMe"

export const ApplicationViews = () => {
	return (
        <>
        <Routes>
      <Route path="portfolio-website">
        <Route
          index
          element={

             <HomePage/>
          }
        />
        <Route
          path="aboutMe"
          element={
            
            <AboutMe />
          }
        />
        <Route
          path="projects"
          element={
            
            <Projects />
          }
        />
       
      </Route>
      <Route path="*" element={<p>Whoops, nothing here...</p>} />
    </Routes>
        </>
        // <>Test Text!!</>

        
    )
    
}