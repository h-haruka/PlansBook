import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import loginPage from './login'


const App = () => (
  <BrowserRouter>
    <div>
    <Link to='/'>Login</Link>
      <ul className="mainMenu">
        <li><Link to='home'>Home</Link></li>
        <li><Link to='/todo'>Todo</Link></li>
        <li><Link to='/calendar'>Calendar</Link></li>
        <li><Link to='/memo'>Memo</Link></li>
      </ul>

      <hr />
      <Route exact path='/' component={loginPage} />
      <Route path='/home' component={home} />
      <Route path='/todo' component={todo} />
      <Route path='/calendar' component={calendar} />
      <Route path='/memo' component={memo} />
    </div>
  </BrowserRouter>
)


const home = () => (
  <div>
    <h2>Home</h2>
    <p>トップページです</p>
  </div>
)

const todo = () => (
  <div>
    <h2>Todo</h2>
    <p>Todoの管理ができます</p>
  </div>
)
const calendar = () => (
  <div>
    <h2>Calendar</h2>
    <p>スケジュールの管理ができます</p>
  </div>
)

const memo = () => (
  <div>
    <h2>Memo</h2>
    <p>メモの管理ができます</p>
  </div>
)

export default App;