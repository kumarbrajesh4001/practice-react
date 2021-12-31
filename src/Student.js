// import React, { Component } from 'react';
// import './index.css'
// // const Student = (props)=>{
// //   return <h1 className='abc'>mere do anmole ratan {props.name}</h1>
// // }
// class Student extends Component {
//   render(){
//     return <h1 className='abc'>mere do anmole ratan {this. props.name}</h1>
//   }
// }
// export default Student;

// import React, { Component } from 'react'
// class Student extends Component{
//   state = {
//     name:'gagan',
//     roll:this.props.roll,
//   }
//   render(){
//     return <h1>hello {this.state.name} {this.state.roll} {this.props.roll} {this.props.name}</h1>
//   }
// }
// export default Student;

// import React, { Component } from "react";
// class Student extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "ram siya ram",
//       roll: "111",
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>hamara kanha goverdhan girdari {this.state.roll}</h1>
//         <p>ram nam adhar jinhe bo jal me{this.state.name}</p>
//         {this.props.name}

//           {this.props.roll}
//       </div>
//     );
//   }
// }
// export default Student;

/* import React, { Component } from "react";
class Student extends Component { */
// constructor(props){
//   super(props);
//   this.handleClick = this.handleClick.bind(this);
// }

/*  constructor(props) {
    super(props);
    this.qw = "1221";
    this.state = {
      name: "brajesh",
      roll: "123",
      age: this.props.age,
    };
  }

  handleClick = (q, j,i,r) => {
    console.log(q);
    console.log(j);
     console.log(i);
console.log(r);
    // console.lg ("hello every one ", this);
    // this.setState(function(state,props){
    //  console.log(state,props);
    //  this.state.name = 'gaagn';
    //   this.state.roll = 100;
    //   this.state.age = 15;

    //   console.log(state.name);
    //   console.log(props.age);
    // })

    //  this.setState({name:'karan', roll:200})
  };

  // handleClickArg = (e)=>{
  //   this.handleClick('101',this,e);
  // }
/* 
  render() {
    return (
      <div>
        <h1>ram kahani suno re ram kahani {this.state.name} </h1>
        <p>mere do anmole ratan {this.state.roll}</p>
         <button onClick={this.handleClick.bind(this,this.state.name, "kumar",200)}> 

          click Me
        </button>
      </div>
    );
  }

}
export default Student; */

/* import React from "react";
function Student(props) {
   let handleclick = (e) => {
    e.preventDefault();
    console.log("hello how are you", props.name);
  };
  return (
    <div>
      <h1>hello guys </h1>
      <a href='https:\\www.facebook.com' onClick={handleclick}>click me</a>
    </div>
  );
}
export default Student;
 */

/* import React, { Component } from 'react'
import Marks from './Marks';

export default class Student extends Component {
  render() {
    console.log('Student - Rendered [child of App]');
    return (
      <div>
        <h1>Hello {this.props.name}
        </h1><Marks />
      </div>
    )
  }
}
 */

// Updating phasing//
/* 
import React, { Component } from "react";
import Marks from "./Marks";
export default class Student extends Component {
  constructor(props) {
    console.log("constructor student");
    super(props);
    this.state = {
      roll: 101,
    };
  }
  

  clickHandle = () => {
    console.log("Button Clicked");
    this.setState({ roll: this.state.roll+2 });
  };

  render() {
    console.log("render Student");
    return (
      <div>
        <Marks roll={this.state.roll} />
        <button onClick={this.clickHandle}> click</button>
      </div>
    );
  }
}
  */

/* import React, { Component } from "react";

export default class Student extends Component {
  componentDidMount() {
    console.log("Student- DidMount");
  }
  componentWillUnmount() {
    console.log("Student Unmount");
  }
  render() {
    console.log("Student Render");
    return (
      <div>
        <h1>Hello Student Component</h1>
      </div>
    );
  }
}
 */