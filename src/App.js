import { useState } from "react";
import logo from "./logo.svg";
import StateClassComp from "./Statewithclasscomp";
// import "./App.css";
// import User1 from "./User1";
// import Classcomp1 from "./Classcomp1";



function App() {
  // --------- one Component inside another component -----------
  // function Apple()
  // {
  //   return(
  //     <div>Apple Component</div>
  //   )
  // }
  // const [data,setData]=useState(0);
  // function updateData()
  // {
  //   setData(data+1);
  // }
  return (
    <>
      {/* Component is a piece of code that can reuse such as Function but it is more powerful than function*/}

      {/* Mainly there are two types of Component i.e Function and Class Component others are Controlled,Uncontrolled,Higher Order Component */}

      {/* Q.1 Can we use one Component inside another component 
        Yes! we can use one component inside another component*/}

      {/* Q2.Can we use JSX without React? */}
        {/* Yes! We can use it by using createElement function i.e through DOM */}

      {/* <div>Hello World</div>
      <User1 />
      <Classcomp1 /> */}
      {/* <Apple/> */}
      <StateClassComp/>

      {/* <div className="App">
        <h1>{data}</h1>
        <button onClick={() => updateData()}>Click Me</button>
      </div> */}
    </>
  );
}

export default App;
