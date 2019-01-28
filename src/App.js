import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import './main.js';


const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/todo'>Todo</Link></li>
        <li><Link to='/calendar'>calendar</Link></li>
        <li><link to='/memo'>Memo</link></li>
      </ul>

      <hr />
      <Route exact path='/' component={Home} />
      <Route path='/todo' component={todo} />
      <Route path='/calendar' component={calendar} />
      <Route path='/memo' component={memo} />
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
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

class master extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  };

  render() {
    return (
      <div>
       <main />

      </div>
    );
  }



}

export default master;