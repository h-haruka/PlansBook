import React, { Component } from 'react';
import './login.css';

class loginPage extends Component {

  render() {
  return (
    <div className="mainPage">
     <h1 className="title">Plans Book</h1>
     <div className="loginBox">
     <h2 className="subTitle">Hello</h2>
      <br />
      <label>UserName : <input type="text" ref="name" className="textForm" /></label>
      <br />
      <label>PassWord : <input type="text" ref="pass" className="textForm" /></label>
      <br />
      <input type="button" className="buttonStyle" value="Login" />
     </div>
    </div>
    );
}
}


export default loginPage;