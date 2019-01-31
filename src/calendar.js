import React, { Component } from 'react';
import './calendar.css';
import HeaderComponent from './header';

class calendar extends Component {
  render() {
    return (
      <div>
        <header>
          <HeaderComponent />
        </header>
        <h1>スケジュールの管理ができます</h1>
      </div>
    );
  }
}

export default calendar;