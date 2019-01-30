import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import loginPage from './login';
import home from './home';
import todo from './todo';
import calendar from './calendar';
import memo from './memo';

const App = () => (
  <BrowserRouter>
    <div className="mainContents">
    <Link to='/'>Login</Link>
    <Link to='home'>Home</Link>
    <Link to='/todo'>Todo</Link>
    <Link to='/calendar'>Calendar</Link>
    <Link to='/memo'>Memo</Link>
        
      <Route exact path='/' component={loginPage} />
      <Route path='/home' component={home} />
      <Route path='/todo' component={todo} />
      <Route path='/calendar' component={calendar} />
      <Route path='/memo' component={memo} />
    </div>
  </BrowserRouter>
)

export default App;