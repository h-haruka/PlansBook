import React, { Component } from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.datefunc = this.datefunc.bind(this);
  }

  datefunc() {
  //今日の日付データを変数dateに格納
  const date = new Date(); 
  //年・月・日・曜日を取得する
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const week = date.getDay();
  const day = date.getDate();

  const weeks= new Array("日","月","火","水","木","金","土");

  const todaysDate = document.write(year+"年"+month+"月"+day+"日 "+weeks[week]+"曜日")
  return (
    todaysDate
  );
  }

  render() {
    return (
      <div className="homeScreen">
      {/* headerは実際には別コンポーネントで扱う */}
      <header>
        <FontAwesomeIcon icon="faEllipsisV" className="menuIcon"/>
        <h1 className="homeTitle">Home</h1>
        <p className="userId">ID : User</p>
      </header>
       
      <h2 className="userName">こんにちは、Userさん</h2>
      <h3>{this.state.datefunc}</h3>
      <br />
      <div className="scheduleArea">
      <h2 className="scheduleTitle">Todays Schedule</h2>
      <ul>
        <li>10:00　会議</li>
        <li>12:00　昼食会</li>
        <li>18:00　英会話</li>
      </ul>
      </div>
      </div>
    );
  }
}
export default home;