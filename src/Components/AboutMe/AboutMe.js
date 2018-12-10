import React,{Component} from 'react';
import './Styles/AboutMe.css'
import RGithubCalendar from "../GitHub/GitHub";

class AboutMe extends Component{
render(){
    return(
<div className={'about-me-container'}>
        <h3 className={'about-me-title'}>About Me:</h3>
    <div className={'description'}>
        <img alt= {"This is me"} src={require('../../Resources/img/me-pic.jpg')}/>
<p>My name is Michael Valentin. Currently I'm a college student doing my degree on Videogame Design and Development on Interamerican University of Puerto Rico but I'm taking a like for web development.I've decided to dedicate some of my time to web development aside from game dev.
    Currently I'm learning through free courses online such as freecodecamp, codecademy, W3schools and a few books dedicated to web development. I'll try and expand my knowledge into javascript and web development frameworks that would help me into my future career to the point where I'm satisfied from the things I've learn and of course satisfy any employer that would require my abilities.</p>
    </div>
    <h1 className={'latest'}>Latest Activity:</h1>
    <figure ><embed className={'data'} src="https://wakatime.com/share/@5531f044-89b3-4285-8c10-93896d5068bf/24aa61a6-fade-4a4c-8156-19e359b8218c.svg"></embed></figure>
<RGithubCalendar name={'mike1136'}/>
</div>
    )
}
}
export default AboutMe;