import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import defaultExport   from './react-transition-group';
import registerServiceWorker from './registerServiceWorker';
import {tree} from './Content/TREE.js';



function Story(props){
    var classes="";
    if (props.weather == null){
         return (null);
     }
    else{
   
     if(props.weather == "Active Child") {
          classes += "square ";
          classes +=props.pos;
         return (
          <div className={classes} onClick={props.onClick}>
            <h1>{props.name}</h1>
           </div>
         );
            }
    else{
        classes+= "contentHeader ";
        classes+= props.pos;
        return(
        <div className="content">
        <div className={classes} onClick={props.onClick}>
          <h1>{props.name}</h1> 
          <h1>Back</h1>
        </div>
        <div className = "contentBody">   
            <div className = "contentCol">
                {props.column1}
            </div>    
            <div className = "contentCol">
                {props.column2}
            </div>   
        </div>
        </div>
        );
     }
    }
}

function Cloud(props) {
     var classes ="";
     if (props.weather == null){
         return (null);
     }
    else {
       classes += "square ";
       classes+=props.pos;
       if(props.weather=="Active Child"){
        classes+=" Canopy";
        return(
         <div className={classes} onClick={props.onClick}>
            <h1>{props.name}</h1>
         </div>
        );
       }   else{
        return(
        <div className={classes} onClick={props.onClick}>
            <h1>Back </h1>
         </div>
        );
           
       }
    } 
}

function Gallery(props){
  var classes="";
    if (props.weather == null){
         return (null);
     }
    else{
   
     if(props.weather == "Active Child") {
          classes += "square ";
          classes += "Canopy ";
          classes +=props.pos;
         return (
          <div className={classes} onClick={props.onClick}>
            <h1>{props.name}</h1>
           </div>
         );
            }
    else{
        classes+= "contentHeader ";
        classes+= props.pos;
        var  display=[];
        for (var x=0; props.gallery.length>x;x++){
            display.push(<div className="frame">{props.gallery[x]}</div>
            );
        }
        return(
        <div className="content">
        <div className={classes} onClick={props.onClick}>
          <h1>{props.name}</h1> 
          <h1>Back</h1>
        </div>
        <div className = "contentBody">{display}</div>
        </div>
        );
     }
    }
}
     
    


class Sky extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      clouds: this.props.tree.map((weather) => {
        if(weather.parent==="None"){
            return ("Active Child");
        }
        else{
            return null;
        }
      }
    ),
     
    };
      
  }

  handleClick(i) {
    const weather = this.state.clouds[i];
    const clouds = this.state.clouds.slice().fill(null);
    
    if (weather=="Active"){
        var up =this.props.tree[i].parent;
        for (let x = 0; clouds.length>x; x++){
            
            if(this.props.tree[x].parent==up){
                
                clouds[x] = "Active Child";
                 }
            if (this.props.tree[x].name==up){
                clouds[x] = "Active";
            }
        }
    
    }
    else{
        for (let x = 0; clouds.length>x; x++){
            if(this.props.tree[x].parent==this.props.tree[i].name) {
                clouds[x] = "Active Child";
        }
        }
         clouds[i] = 'Active'; 
    }
   
    this.setState({clouds: clouds,
                  });
  }

  renderCloud(i) {
    
    return (

      <Cloud
        name = {this.props.tree[i].name}
        weather={this.state.clouds[i]}
        onClick={() => this.handleClick(i)}
        pos = {this.props.tree[i].class}

      />
    );
  }
  renderStory(i) {
      return(
        <Story
        name = {this.props.tree[i].name}
        weather={this.state.clouds[i]}
        onClick={() => this.handleClick(i)}
        pos = {this.props.tree[i].class}
        column1 = {this.props.tree[i].column1}
        column2 = {this.props.tree[i].column2}
        />
      )
}
    renderGallery(i){
        console.log(this.props.tree[i].gallery);    
        return(
        <Gallery
        name = {this.props.tree[i].name}
        weather={this.state.clouds[i]}
        onClick={() => this.handleClick(i)}
        pos = {this.props.tree[i].class}
        gallery = {this.props.tree[i].gallery}
        />
        
        );
    }

  renderSky(){
      const sky = this.props.tree;
      var out=[];
      for(var i = 0; sky.length>i; i++){
          if(sky[i].type=="Cloud"){
               out.push(this.renderCloud(i));
          }
      else if(sky[i].type=="Gallery"){
          out.push(this.renderGallery(i));
      }
      
      else{
           out.push(this.renderStory(i));
      }
        
  }
      return out;     
  }
  render() {

    
    
    return (
   
      <div className =  "background">
         
        <div className = "header">
         <h1> James Stuart (Work in Progress) </h1>
          
        </div>
      
        <div className = "flex">
        {this.renderSky()}
      </div>

     </div>

    );
  }
}
class App extends React.Component {
  render() {
    return (
     
          <Sky 
            tree = {tree}
          />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
