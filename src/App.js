// import React from "react";
// import Student from "./Student";

// class App extends Component {
//   render() {
//     return <Fragment> <h1 class='abc'>hello every one  by {this.props.name}</h1><p>ram kahani suno re ram kahani</p></Fragment>;
//   }
// }
// export default App;

// const App = () => {
//   return <><Student name='ram'/>
//   <Student name = 'lakhan'/>
//   <Student name='krishna' />
//   <Student name='radhey krishna' />
//   </>

// };
// export default App;

// import React from "react";
// // import "./index.css";

// const obj = {
//   age: 12,
// };

// function show(name) {
//   return name;
// }

// const el = (
//   <h1>
//     hello {obj.age}every one {show("kumar brajesh")}
//   </h1>
// );
// export default el;

// import React, { Component } from "react";
// import Pt from "prop-types";
// // class Student extends Component {
// //   render() {
// //     return (
// //       <>
// //         <h1>
// //           ram lakhan {this.props.name} {this.props.roll}
// //         </h1>
// //         {this.props.age}

// //        <h2> {this.props.children}</h2>
// //       </>
// //     );
// //   }
// // }

// const Student = (props) => {
//   return (
//     <>
//       <h1>we are  {props.name}</h1>
//       <p>ram kahani suno re {props.roll} ram kahani {props.children}</p>
//       {props.age}
//       <h4>{props.children}</h4>
//     </>
//   );
// };

// Student.propTypes = {
//   name: Pt.string.isRequired,
//   roll:Pt.number,
// };

// Student.defaultProps = {
//   name:'kumar brajesh',
// }
// export default Student;

/* 
import React, { Component } from 'react'
import Student from './Student';

export default class App extends Component{
  constructor(props){
    super(props);
    console.log('App - Constructor Called');
    console.log(props);
    this.state = {
      roll:'102' 
    }
  }
static getDerivedStateFromProps(props, state){
  console.log('App - Get Derived State Form Props');
  console.log(props,state);
  return null;
}

componentDidMount(){
  console.log('App - ComponentDidMount - Mount');
}

  render(){
    console.log('App - render');
    return (<><Student name='kumar brajesh'/>
    <h1>{this.props.name} {this.props.title} {this.state.roll}</h1></>) 
  }

} */

//componentunmount

/* import React, { Component } from "react";

export default class App extends Component {
  componentDidMount() {
    console.log("App - DidMount");
  }

  componentWillUnmount() {
    console.log("App Unmount");
  }
  render() {
    console.log("App - render");
    return (
      <div>
        <h1>Hello App Component</h1>
      </div>
    );
  }
}
 */

/* 
//Hooks/////

import React, { useState } from "react";
// import "./index.css";
function App() {
  const [name,setName]= useState("kumar");
  const [roll,setRoll]= useState(101);

  // const name = nameStateVariable[0];
  // const setName = nameStateVariable[1];
   const handleClick = () => {
    setName(" kumar brajesh ");
    setRoll(103);
  };
 
  return (
    <><h1 style={{color:'green'}}>jay kuamr</h1>
      <h1 style={{color:'blue'}}>{name}</h1>
      <h2>{roll}</h2>
      <button type="button" onClick={handleClick}>
        button
      </button>
    </>
  );
}
export default App;
 */
/* 
import React, { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(30);

  const handleIncriment = () => {
    setCount(count + 1);
  };

  const handleDecriment = () => {
    setCount1(count1 - 1);
  };

  useEffect(() => {
    console.log("Use Effect Called");
  },[count1]);

  return (
    <>
      <h1>Count Up:{count}</h1>
      <button type="button" onClick={handleIncriment}>
        Incriment button
      </button>
      <h1>Count Down:{count1}</h1>
      <button type="button" onClick={handleDecriment}>
        Decriment button
      </button>
    </>
  );
}
export default App;
 */
/* 
import React from 'react';
import useCustomCounter from './Custom';
function App(){
  const data = useCustomCounter();
  const data1 = useCustomCounter();

  return (<>
    <h1 style={{color:'green'}}>Count Up: {data.count} </h1>
    <button type='button' onClick={data.handleIncrement}> Incriment</button>

    <h1>Count Up: {data1.count} </h1>
    <button type='button' onClick={data1.handleIncrement}> Incriment</button>
  </>)
}
export default App; */

/* import React, { Component } from "react";
import Guest from "./Guest";
import User from "./User";
export default class App extends Component {
  render() {
    const isResister = this.props.consumer;
    if (isResister) {
      return <Guest />;
    }
    return <User />;
  }
} */

/* import React, { Component } from "react";
import User from "./User";
export default class App extends Component {
  render() {
    const primeMember = this.props.primeMember;
if(primeMember){
  
}
    return (
      <>
        <h1>Hello kumar brajesh </h1>
        {primeMember && <User />}
      </>
    );
  }
} */
/*
import React, { Component } from "react";
import User from "./User";
import Guest from "./Guest";

export default class App extends Component {
  state = {
    isLoggedIn: false,
  };

  clickLogin = () => {
    this.setState({ isLoggedIn: true });
  };
  clickLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    // let consumer;
    // if (isLoggedIn) {
    //   consumer = <User clickData={this.clickLogout} />;
    // } else {
    //   consumer = <Guest clickData={this.clickLogin} />;
    // }
    // return consumer;

    //ternary operator;

    // return (
    //   <>
    //     {isLoggedIn ? (
    //       <User clickData={this.clickLogout} />
    //     ) : (
    //       <Guest clickData={this.clickLogin} />
    //     )}
    //   </>
    // );

    // by IIfee
     return (
      <>
        {(() => {
          if (isLoggedIn) {
            return <User clickData={this.clickLogout} />;
          } else {
            return <Guest clickData={this.clickLogin} />;
          }
        })()}
      </>
    );
  }
}
  */

/* import React, { Component } from "react";

export default class App extends Component {
  render() {
    const arr = this.props.number;
   
    return (
      <ul>
        {arr.map((cv) => (
          <li>{cv}</li>
        ))}
      </ul>
    );
  }
}
 */

/* 
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { id: 101, name: "kumar", password: "123qwe" },
        { id: 102, name: "Brajesh", password: "456rty" },
        { id: 103, name: "rajesh", password: "098tres" },
      ],
      isLoggedIn: false,
    };
  }
  render() {
    const arr = this.state.users;
    return (
      <div>
        {arr.map((cv) => {
          return (
            <h1 key = {cv.name}>
              {cv.id} {cv.name} {cv.password}
            </h1>
          );
        })}
      </div>
    );
  }
}
 */
// render() {
//const newArr = this.state.users.map((cv) => {
//   return (
//     <h1>
//       {cv.id} {cv.name} {cv.password}
//     </h1>
//   );
// });

// return (
//   <div>
//     {/* <h1>Id:{this.state.users[0].id} Name:{this.state.users[0].name} pass: {this.state.users[0].password}</h1>
//     <h1>Id:{this.state.users[1].id} Name:{this.state.users[1].name} pass: {this.state.users[1].password}</h1>
//     <h1>Id:{this.state.users[2].id} Name:{this.state.users[2].name} pass: {this.state.users[2].password}</h1> */}
//   </div> )}

/* import React, { Component } from 'react';
import User from './User';

export default class App extends Component {
  render() {
   
    const arr = this.props.number;
    const newArr = arr.map((cv)=>{return <User key={cv} value={cv}/>});
    return <ul>{newArr}</ul>
   
  }
}
 */
/* 
import React, {Component} from 'react';
export default class App extends Component{
state = {
  change:false,
}

handleChange=()=>{
  this.setState({change:true});
}

  render(){
const btnstyle = {
  color:'orange',
  border:'2px solid blue',
}

const btns = {
  background:'blue',
  color:'red',
  
}

if(this.state.change){
  btns.background = 'green';
  btns.color= 'white';

}

    return (<><h1 style = {{...btnstyle,...{fontSize:'60px',}}}>hello everyone hy kumar brajesh</h1>
    <button onClick={this.handleChange} style={btns}>button</button></>)
  }
}
 */

// import React, { Component } from "react";
// import User from "./User";
// import "./App.css";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1 className="txt">Hello every one</h1>
//         <User/>
//       </div>
//     );
//   }
// }

// import React, { Component } from 'react';
// import User from './User';
// // import './App.css';

// export default class App extends Component {

//   render() {
//     let style = false;
//     return (
//       <div>
//         <h1 className='txtb'>hello every one</h1>
//         <User rang = {style?'txtb':'txtg'}/>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react';
// import './App.css';
// import User from './User';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1 className='txtb txtg'>hello every one</h1>
//         <User className={this.props.className}/>
//       </div>
//     )
//   }
// }

// import React, {Component} from 'react';
// import User from './User';
// import Style from './App.module.css';
// import Style1 from './User.module.css';
// class App extends Component{
//   render(){
//     return (<><h1 className={Style.asd}>hello everyone</h1>
//     <p className={Style1.asd}>mere nena savan bhando o mere o kanheya</p>
//     <User/></>)
//   }
// }
// export default App;

// import React, { Component } from "react";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <img
//           src={process.env.PUBLIC_URL + "image/1A.jpg"}
//           alt="mypic"
//           width="200px"
//         />
//       </div>
//     );
//   }
// }

// import React, { Component } from "react";
// import pic from "./1A.jpg";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <img src={pic} alt="mypic" width="300px" />
//       </div>
//     );
//   }
//  }

// import React, { Component } from "react";

// export default class App extends Component {
//   render() {
//     return <button className='btn btn-primary'>Normal Button</button>;
//   }
// }

// import React, { Component } from "react";
// export default class App extends Component {
//   state = {
//     value: "",
//   };
//   handleChange = (e) => {
//     //  console.log(e.target.value);
//     this.setState({ value: e.target.value.toUpperCase().substr(0,10) });
//   };
//   render() {
//     return (
//       <>
//       <form>
//         <h2>Controlled by React</h2>
//         <input
//           type="text"
//           value={this.state.value}
//           onChange={this.handleChange}
//         />
//         </form>
//       </>
//     );
//   }
// }

// import React, { Component } from 'react';

// export default class App extends Component {
//   state = {
//     value:'hello kumar'
//   }

//   handleChange=(e)=>{
//     console.log(e.target);
//     this.setState({value:e.target.value.substr(0,10)})
//   }
//   render() {
//     return (
//       <div>
//         <form>
//           <h2>Controlled by React TextArea</h2>
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </form>
//       </div>
//     )
//   }
// }

/* 
import React, { Component } from "react";

export default class App extends Component {
  state = {
    name: "kumar",
    password: "helloworld",
  };
  // name = (e) => {
  //   this.setState({ name: e.target.value });
  //   //  console.log(e.target);
  // };

  // password=(e)=>{
  //   this.setState({password:e.target.value})
  // }

handleChange=(e)=>{
  // console.log(e.target.name);
  this.setState({[e.target.name]:e.target.value});
  // const value = e.target.name==='password'?e.target.value.toUpperCase():e.target.value;
  // this.setState({[e.target.name]:value})


  // if(e.target.name=='name'){
  // this.setState({'name':e.target.value});}
  // else {
  // this.setState({'password':e.target.value});

  // }
  
}
handleSubmit = (e)=>{
  console.log(e.target[1].value);
  e.preventDefault();
}

  render() {
    return (
      <div>
        <form name='hello' onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name='name' value={this.state.name} onChange={this.handleChange} />
          </label>
          <br />
          <br />
          <label>
            password:
            <input
              type="text" name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <br/><br/>
<input type='submit' value='Submit' />

        </form>
      </div>
    );
  }
}
 */

// import React, { Component } from "react";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: ''
//     }
//     this.textInput = React.createRef();
//   }

//   // componentDidMount = () => {
//   //   //  console.log(this.textInput.current);
//   //   // this.textInput.current.focus();
//   // };
// handleSubmit=(e)=>{
//   e.preventDefault();
//   console.log(e.target[1]);
//   console.log(this.textInput);
//   //  console.log(this.textInput.current.innerHTML);
//   this.setState({value:this.textInput.current.value})
//   // console.log(e.target[0].value);
//   // this.setState({value:e.target[0].value})
// }

//   render() {
//     // console.log('render');
//     return (
//       <>
//       <h2 >hello :{this.state.value}</h2>
//       <form onSubmit={this.handleSubmit}>

// <input type='text' ref={this.textInput} />
// <input type='submit' value='Submit' />

//         {/* Name: <input type="text" ref={this.textInput} />
//         <br />
//         <br />
//         Pasword: <input type="text" />
//         <br />
//         <br />
//         Address: <input type="text" /> */}
//       </form>
//       </>
//     );
//   }
// }

// import React, { Component } from "react";
// import User from "./User";
// import Guest from "./Guest";

// export default class App extends Component {
//   state = {
//     name: 121,
//     value:12,
//   };
//   render() {
//     return (
//       <>
//         <h1>{this.state.name}</h1>
//         <User name={this.state.name} />
//         <Guest val={this.state.value} /> {this.state.name}
//       </>
//     );
//   }
// }

// import React, { Component } from 'react';
// import User from './User';

// export default class App extends Component {
//   state = {
//     value: 13,
//   }
//   render() {
//     return (<><h1 >hello every one {this.state.value}</h1>
//     <User nam={this.state.value}/></>)

//   }
// }
// import React, { Component } from "react";
// import User from "./User";
// import {Provider} from './Custom';

// export const myContext = React.createContext();

// export default class App extends Component {
//   state = {
//     value: 100,
//     name: "kumar brajesh",
//     work:'learn React',

//   };

//  handleClickContex =()=>{
//    console.log('hello');
//   this.setState({value:this.state.value+1})
// }

//   render() {
//     const contextValue= {
//       state:this.state,
//       handleClick:this.handleClickContex
//     }
//     return (
//       <Provider value={contextValue}>
//       <h1>App Component {this.state.value }</h1>

//         <User />
//       </Provider>
//     );
//   }
// }
/* 
import React, { Component } from "react";
import Rahul from "./Rahul";
import Sonam from "./Sonam";
import Ankit from "./ankit";

export default class App extends Component {
  render() {
    const as = 123;
    return (
      <>
        <h1> hello {this.props.name} App Component</h1>
        <Rahul camp="120" />
        <Sonam camp="100" />
        <Ankit camp="50" />
      </>
    );
  }
}
 */
 /* 
import React, { Component } from "react";
import Img1 from "./1A.jpg";
import Img2 from "./004.jpe";
import Image from "./Image";
import Error from "./Error";

export default class App extends Component {
  render() {
    return (
      <div>
        <Error>
          <Image flw={Img1} />
          </Error>
          <Error>
          <Image flw={Img2} />
          </Error>
          <Error>
          <Image flw="NoImage" />
        </Error>
      </div>
    );
  }
}  */

// import React, { Component,StrictMode } from "react";
// import User from "./User";
// export default class App extends Component {
//   render() {
//     return (
//       <StrictMode>
//         <User />
//       </StrictMode>
//     );
//   }
// }
