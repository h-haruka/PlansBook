import React, { Component } from 'react';
import './todo.css';

function List(props) {
  return (
    <ul style={{padding: "0", margin: "15px 0 0 0"}}>
      {props.todo.map( (todo,i) => {
        return <li key={i} style={{width: "70%", margin: "0 15%",listStyle:"none",textAlign: "left", borderLeft: "solid 6px skyblue", borderBottom: "solid 2px #dadada",background: "whitesmoke", marginBottom: "3px"}}> <input type="button" value="X"
         onClick={() => props.deleteTodo(i)} style={{border: "none", background: "whitesmoke"}}/> {todo.title}</li>
      })}
    </ul>
  )
};

class todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [],
      array: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.enterAction = this.enterAction.bind(this);
    this.enterSearch = this.enterSearch.bind(this);
    this.searchTodo = this.searchTodo.bind(this);
  }

  // 新規追加
  addTodo() {
    // 空白の場合の制御
    if (this.refs.newText.value === "") {
      return;
    }

    // 空文字じゃない場合は以下の処理がされる
    this.state.todo.push({
      title: this.refs.newText.value
    });

    this.setState({
      todo : this.state.todo
    });
    // 初期化
    this.refs.newText.value='';
  }

  deleteTodo(i) {
    // 削除
    this.state.todo.splice(i,1);
    // 保存
    this.setState({
      todo : this.state.todo
    });
  }
// enterを押したときに追加できるようにする
   enterAction (event) {
     if(event.keyCode === 13){
    // console.log(event.keyCode); テスト用
    // console.log("text"); テスト用
     return this.addTodo()
    }
  }
  
  enterSearch (event) {
    if(event.keyCode === 13){
      return this.searchTodo()
    }
  }
  // 検索時の処理
    searchTodo() {
      let array = []
      for(let i=0; i<this.state.todo.length; i++) {
        if(this.state.todo[i].title === this.refs.searchWord.value){
          this.state.array.push(
            this.state.todo[i]
            );
        }
           // 保存
        this.setState({
        array : this.state.array
      });
      }
      console.log(this.state.array); 
      // 初期化
      this.refs.searchWord.value='';
    }

// ３
render() {
  return (
    <div className="mainContents">
    <h1>Todoの管理ページです</h1>
      <input type="text" ref="newText" placeholder="例：Progateを進める"　className={"form"} onKeyDown={(event)=>this.enterAction(event)} />
      <input type="button" value="追加" onClick={this.addTodo}  className={"button"} />
      <List todo={this.state.todo} deleteTodo={this.deleteTodo}/>
      <div className="border"></div>
      <p>検索ワードを入れてください</p>
      <input type="text" ref="searchWord" className={"form"} onKeyDown={(event)=>this.enterSearch(event)} />
      <input type="button" value="検索" onClick={this.searchTodo} className={"button"}/>
      <p>検索結果</p>
      {this.state.array.length}<span style={{fontSize: "0.8em"}}>件</span>
      <ul style={{margin: "0", padding: "0"}}>
        {this.state.array.map( (value,i, array) => {
          console.log(array);
        return <li key={i} style={{width: "70%", margin:"0 15%", paddingLeft: "4px", textAlign: "left",listStyle: "none", background: "#FFF51E", borderBottom: "solid 2px #dadada",borderRight: "solid 2px #dadada", marginBottom: "3px"}}>{value.title}</li>
        })}
      </ul>
    </div>
  );
 }
}

export default todo;