import React, { Component } from 'react';
import {MdMenu} from 'react-icons/md';
import {Link} from 'react-router-dom';

import logo from '../images/logo_white.svg';
import headerImg from '../images/imgHome.jpg';

export default class Header extends Component {

  //toggle display of mobile menu depending on current display setting
  toggle=()=>{
    let navMenu = document.querySelector(".menu-row");
    navMenu.style.display === "block"?navMenu.style.display = "none":navMenu.style.display = "block";
  }

  render() {
    return (
      <div className="Header">

        <header className="img" style={{ backgroundImage: `url(${headerImg})` }}>
          <Link to="/">
            <img className="logo" src={logo} alt="Hotel Al-Qamar logo"/>
          </Link>
        </header>

        <nav>
          <div className="mob-nav-row">
            <button type="button" className="menu-toggle" onClick={this.toggle}>
              <MdMenu size={28}/>
            </button>
          </div>
          <div className="menu-row">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/rooms" className="nav-link">
              Rooms
            </Link>
          </div>
        </nav>

      </div>
    )
  }

}