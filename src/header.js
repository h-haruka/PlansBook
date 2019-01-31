import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';

class HeaderComponent extends Component {

  handleToAboutPage = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="headerStyle">
        <div id="nav-drawer">
        <input id="nav-input" type="checkbox" className="nav-unshown" />
        <label id="nav-open" htmlFor="nav-input"><span><i className="fas fa-ellipsis-v"></i></span></label>
        <label className="nav-unshown" id="nav-close" htmlFor="nav-input"></label>

        <div id="nav-content">
          <div className="mainContents">
          <h3 className="siteTitle">Plans Book</h3>
            <Link to='/home' className="menuContents"><span className="fas fa-home"></span> Home</Link>
            <br />
            <Link to='/todo' className="menuContents"><span className="fas fa-clipboard-list"></span> Todo</Link>
            <br />
            <Link to='/calendar' className="menuContents"><span className="far fa-calendar-alt"></span> Calendar</Link>
            <br />
            <Link to='/memo' className="menuContents"><span className="far fa-sticky-note"></span> Memo</Link>
            <br />
            <p className="logout" onClick={this.handleToAboutPage}><span className="fas fa-door-open"></span> Logout</p>
          </div>
          
          </div>
       </div>
        <h1 className="homeTitle">Home</h1>
      </div>
    );
  }
}
export default withRouter(HeaderComponent);