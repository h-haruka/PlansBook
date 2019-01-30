import React, { Component } from 'react';
import './calendar.css';

class calendar extends Component {
  render() {
    return (
      <div>
        <header>
          <h2 className="calendarTitle">Calendar</h2>
        </header>
        <h1>スケジュールの管理ができます</h1>
      </div>
    );
  }
}

export default calendar;