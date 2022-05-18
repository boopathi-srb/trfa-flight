import React from "react";
import { NavLink } from "react-router-dom";
import './App.css';
// import logo from "../../images/logo-NT.png";
import AOS from 'aos';
import "aos/dist/aos.css"

const Navbar =()=>{
  AOS.init({
    duration: 1000,
    offset:100,
    delay:400
  });
const NavBar=document.getElementById("nav");
function close(){
  NavBar.className.toggle(" close")
  console.log("close");
}

  return(
    <div>
     <div className="topbar">
       <div className="logo_wrapper">
          {/* <img  classname="logo" src={logo} alt="logo"/>   */}
          <h1>Travel Fika</h1>
       </div>
      
      <div className="rightside">
       <input type="checkbox" id="toggle_button" className="toggle_button" aria-controls="nav" aria-expanded="false">
       </input>
      
       <nav className="topbar_links close" id="nav"  >
           
             <NavLink onClick={close}  class="link" id="links" activeclassname="active" exact to="/signup">Sign-Up</NavLink>
             <NavLink onClick={close}  class="link" id="links" activeclassname="active" exact to="/login">Log-in</NavLink>
            
       </nav>
       <label for="toggle_button" className="toggle_button_label">
         <span></span>
         <p>X</p>
       </label>
      </div>
     </div>
    </div>
  )
}
export default Navbar