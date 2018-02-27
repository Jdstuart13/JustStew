/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
*/

class Cloud extends React.Component {
  render() {
 if (this.weather=="Active" && this.content!=null){
     return (
    <div className="cloud active" onClick={() => this.props.onClick}>
        <h1>{this.props.name}</h1>
         {this.content}
      </div>
     );
 }
 if (this.weather=="Active"){
    return (
      <div className="cloud active" onClick={() => this.props.onClick}>
        <h1>{this.props.name}</h1>
      </div>
      );
  }

  }
}

class Board extends React.Component {
 constructor(props){
     super(props);
     this.state={
     clouds: Array(9).fill(null),
     name: Array(9).fill(null),
     lineage:Array(9).fill(null),
     };
 }
    
  renderCloud(i,id,parent,content) {
    const name = this.state.name.slice();
    const  lineage = this.state.lineage.slice();
    lineage[i] = parent;
    name[i] = id;
    this.setState(lineage:lineage,
                 name:name);
      
    return (<Cloud 
      weather={this.state.clouds[i]}
      content = {content}
      onClick = {()=> this.handleClick(i)}
      />
     );
  }
  handleClick(i){
      const clouds = this.state.clouds.slice();
      clouds[i] = "Active";
      for (let x = 0; x<9; x++){
          if (this.state.lineage[x]=this.state.name[x]){
              clouds[x]= "ActiveChild";
          }
      }
      
      this.setState({clouds:clouds});
  }

  render() {
    
    return (
      <div>
        <div className="status">{'Canopy'}</div>
        <div className="board-row">
          {this.renderCloud(0,"DAD",'none',null)}
          //{this.renderCloud(1,"")}
          //{this.renderCloud(2)}
        </div>
        <div className="board-row">
          //{this.renderCloud(3)}
          {this.renderCloud(4,"benson","jawn",
         <div> "Lorem ipsum dolor sit amet" </div>)}
          //{this.renderCloud(5)}
        </div>
        <div className="board-row">
          //{this.renderCloud(6)}
          //{this.renderCloud(7)}
          {this.renderCloud(8,"jawn","DAD",null)}
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

export default App;
