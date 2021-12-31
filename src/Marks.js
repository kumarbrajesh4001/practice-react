/* import React, {Component} from 'react';
export default class Marks extends Component {
  render(){
    console.log('Marks - Render [child of Student]');
    return <h1>Marks App </h1>
  }
 } */

 // updating phasing
 
/* 
import React, { Component } from "react";
export default class Marks extends Component {
  constructor(props) {
    console.log("constr. Marks");
    super(props);
    this.state = { 
      mroll: this.props.roll,
    }; 
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDrivedStatFromProps");
    console.log(props, state);
    if (props.roll !== state.mroll) {
      return { mroll: props.roll };
    }   
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    
    console.log("shouldComponetUpdate");
    console.log(this.state.mroll);
    if (this.state.mroll < 107) {
      console.log(nextProps, nextState);
      return true;
    }
    return false;
  } 


  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('Mark - getSnapShotBeforeUpate');
    console.log(prevProps,prevState);
    return 100;
  }
  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('Mark - componentDidUpdate "it runs afterupdate"');
    console.log(prevProps,prevState);
console.log(snapshot);
  }

  render() {
    console.log("render Mark");
    return (
      <>
        <h1>Roll {this.state.mroll}</h1>
      </>
    );
  }
}
  

 */