import React, { Component } from 'react';
import './login.css';
import { withRouter } from 'react-router';

class loginPage extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  
  }
  handleToAboutPage = () => {
    this.props.history.push('/home')
  }

  render() {
  return (
    <div className="mainPage">
     <h1 className="title">Plans Book</h1>
     <div className="loginBox">
     <h2 className="subTitle">Hello</h2>
      <br />
      <label>UserName : <input type="text" ref="name" className="textForm" /></label>
      <br />
      <input type="button" className="buttonStyle" value="Login" onClick={this.handleToAboutPage}/>
     </div>
    </div>
    );
}
}


export default withRouter(loginPage);