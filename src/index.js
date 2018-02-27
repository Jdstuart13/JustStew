import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import defaultExport   from './react-transition-group';
import registerServiceWorker from './registerServiceWorker';



function Cloud(props) {
     if (props.weather == null){
         return (null);
     }
    else{
       var classes = "cloud " + props.pos;
       if(props.weather=="Active Child" || props.content==null){
        return(
         <div className={classes} onClick={props.onClick}>
            {props.name} 
         </div>
        );
       }
      else{
          classes="cloudContent";
          return(
          <div className={classes} onClick={props.onClick}>
            <h1>{props.name}</h1>
             {props.content}
         </div>
          
          )
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
   
        
    
    this.setState({clouds: clouds});
  }

  renderCloud(i) {
    
    return (

      <Cloud
        name = {this.props.tree[i].name}
        weather={this.state.clouds[i]}
        onClick={() => this.handleClick(i)}
        pos = {this.props.tree[i].class}
        content = {this.props.tree[i].content}

      />
    );
  }

  render() {
   
    const status = 'Next player: X';
    return (
      <div className = "background">
        
        <div className = "header">
         <h1> James Stuart </h1>
        </div>
    
        <div className = "sky">
        <div className = "flex">
       
        
        {this.renderCloud(0)}
          {this.renderCloud(1)}
          {this.renderCloud(2)}
    
        </div>
        <div className = "flex">
      
        
            {this.renderCloud(3)}
          {this.renderCloud(4)}
          {this.renderCloud(5)}
          {this.renderCloud(6)}
          {this.renderCloud(7)}
          {this.renderCloud(8)}
            </div>
        </div>
     </div>

    );
  }
}
class App extends React.Component {
  
  render() {
     const TREE =[
      {name:"Projects",
       parent: "None",
       class: "canopy"
       
      },
        {
        name:"About Me",
        parent: "None",
        class: "canopy"
        
      },
       {
        name:"Skills",
        parent: "None",
        class: "canopy"
        
      },   
      {
        name:"Questrom Study Abroad",
        parent: "Projects",
        class: "branch",
        content: 
             <div> The name is bond, james bond </div>
        
        
      },
         {
        name:"Questrom Tools",
        parent: "Projects",
        class: "branch",
        content: 
             <div> The name is bond, james bond </div>
      },
         
         {
        name:"This Site",
        parent: "Projects",
        class: "branch",
        content: 
             <div> The name is bond, james bond </div>
             
      },
         {
        name:"Location",
        parent: "About Me",
        class: "branch",
        content: 
             <div> The name is bond, james bond </div>
      },
     {
        name:"Hobbies",
        parent: "About Me",
        class: "branch",
        content: 
             <div> The name is bond, james bond </div>
      },
         {
        name:"My First Client",
        parent: "About Me",
        class: "branch",
        content: 
             
             <div className ="flexInt">
             <div className="halfBox">
             "Through advanced technology known as layer-based image editing software we have created ski’s for gorillas. Never mind that due to a gorilla’s short legs would never be able to properly control a pair of full-sized ski’s, as you can see it is possible and it works perfectly. We are currently working on expanding our line to poles, however, layering ski poles onto a gorilla doesn’t look very natural. Still not convinced? Instagram can’t yet detect photoshop, and if it’s on Instagram it must be real."
             </div>
    
             <img className="skirilla" src = "http://lol.bu.edu/stuart-little/wp-content/uploads/sites/133/2016/10/SOFHD4.1-3.png">
             </img>
             
             
             
             </div>
             
             
             

    
      },
         {
        name:"Biz",
        parent: "About Me",
        class: "rightBranch",
        content: 
             <div> The name is bond, james bond </div>
      },
    
  ];

    return (
     
          <Sky tree = {TREE} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
