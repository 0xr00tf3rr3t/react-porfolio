import React,{Component} from 'react'
import './Styles/NavBar.css'
import {NavLink} from "react-router-dom";
class NavBar extends Component
{
    render(){
        return (
            <nav className={'nav-bar'}>
                <NavLink className={'nav-link'}  activeClassName={'nav-link-active'} to={"/"} exact> Home</NavLink>
                <NavLink className={'nav-link'}  activeClassName={'nav-link-active'} to={"/Projects"}> Projects</NavLink>
            </nav>
        )
    }
}
export default NavBar;