import Header from "../pages/header";
import Work from "../pages/work";
import {Route,Routes} from "react-router-dom";
import About from "../pages/about";
import MyProjects from "../pages/projects";
import MySkills from "../pages/skills";
function Router(){
    return(
        <Routes>
     <Route exact path='/' element={<Work/>}/>
            <Route exact path='/skills' element={<MyProjects/>}/>
    <Route exact path='/about' element={<About/>}/>
            <Route exact path='/skill' element={<MySkills/>}/>


        </Routes>

    )
}
export default Router