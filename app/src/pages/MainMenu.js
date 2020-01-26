/* *
  title: MainMenu.js 

  date: 7/19/2019

  author:  javier olaya

  description: react navLinks that displays the main menu  
         
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Picture from '../components/Picture';
import profilePic from '../pictures/profile.png';
import LogoutContainer from '../containers/LogoutContainer';

const selectedStyle = {
  backgroundColor: "white",
  color: "slategray"
}

const MainMenu = () => <nav className={"mainMenu"}>
  <Picture picture={profilePic} activeStyle={selectedStyle}></Picture>
  <NavLink to="/Profile" activeStyle={selectedStyle} >[Profile]</NavLink>
  <NavLink to="/Contacts" activeStyle={selectedStyle} >[Contacts]</NavLink>
  <LogoutContainer></LogoutContainer>
</nav>

export default MainMenu;