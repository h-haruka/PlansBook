import React, { Component } from 'react';
import './login.css';


const loginPage = () => {
  return (
    <div className="mainPage">
     <h1>Plans Book</h1>
     <div className="loginBox">
      <h2>Hello</h2>
      <label><input type="text" ref="name" className="textForm" />User Name : </label>
      <label><input type="text" ref="pass" className="textForm" />PassWord : </label>
      <input type="button" className="buttonStyle" value="Login" />
     </div>
    </div>
    );
}