import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import logo from '../images/logo_white.svg';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="logo-row">
          <Link to="/">
            <img className="logo" src={logo} alt="Hotel Al-Qamar logo"/>
          </Link>
        </div>
        <div className="end-row"></div>
      </footer>
    )
  }
}
