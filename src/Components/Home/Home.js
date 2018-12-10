import React,{Component} from 'react'
import NavBar from "../NavBar/NavBar";
import AboutMe from "../AboutMe/AboutMe";

class Home extends Component
{
    render(){
        return(
            <div>
                <NavBar/>
                <AboutMe/>
            </div>
        )
    }
}
        export default Home;