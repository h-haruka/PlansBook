import React, { Component } from 'react';
import './header.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import home from './home';
import todo from './todo';
import calendar from './calendar';
import memo from './memo';

class HeaderComponent extends Component {
  render() {
    return (
      <div className="headerStyle">
        <div id="nav-drawer">
        <input id="nav-input" type="checkbox" class="nav-unshown" />
        <label id="nav-open" htmlFor="nav-input"><span></span></label>
        <label class="nav-unshown" id="nav-close" for="nav-input"></label>
        <div id="nav-content">
        <div className="navTitle"></div>
        <BrowserRouter>
          <div className="mainContents">
            <Link to='home' className="menuContents">Home</Link>
            <br />
            <Link to='/todo' className="menuContents">Todo</Link>
            <br />
            <Link to='/calendar' className="menuContents">Calendar</Link>
            <br />
            <Link to='/memo' className="menuContents">Memo</Link>
          </div>
          </BrowserRouter>
          </div>
       </div>
        <h1 className="homeTitle">Home</h1>
      </div>
    );
  }
}
export default HeaderComponent;