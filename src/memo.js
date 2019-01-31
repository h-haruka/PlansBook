import React, { Component } from 'react';
import './memo.css';
import HeaderComponent from './header';

class memo extends Component {
  render() {
    return (
      <div>
        <header><HeaderComponent /></header>
        <h1>メモの管理ができます</h1>
      </div>
    );
  }
}

export default memo;