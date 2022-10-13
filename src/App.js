import logo from "./logo.svg";
import "./App.css";
import User1 from "./User1";
import Classcomp1 from "./Classcomp1";

function App() {

  // --------- one Component inside another component -----------
  // function Apple()
  // {
  //   return(
  //     <div>Apple Component</div>
  //   )
  // }
  return (
    <>
      {/* Component is a piece of code that can reuse such as Function but it is more powerful than function*/}

      {/* Mainly there are two types of Component i.e Function and Class Component others are Controlled,Uncontrolled,Higher Order Component */}

      {/* Q.1 Can we use one Component inside another component 
        Yes! we can use one component inside another component*/}

        {/* Q2.Can we use JSX without React? */}
        
      <div>Hello World</div>
      <User1 />
      <Classcomp1 />
      {/* <Apple/> */}
    </>
  );
}

export default App;
