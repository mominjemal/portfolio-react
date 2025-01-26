import React from "react"
import  './hero.css'
import profile_img from '../../assets/asset/profile_img.svg'
import { Link as AnchorLink } from 'react-scroll';


const Hero = () =>{
  return(
<div id="hero" className="hero">
    <img src={profile_img} alt="" />
     <h1><span>Hi I'm Momin, </span>frontend developer based in Ethiopia.</h1>
     <p>I'm frontend developer from Addis ababa Ethiopia one year of experience</p>
     <div className="hero-action">
     <AnchorLink to='contact' offset={50} smooth={true}> <div  className="hero-connect">connect with me</div></AnchorLink>
        <div className="hero-resume">My Resume</div>
              
     </div>
</div>

  )
}
export default Hero
