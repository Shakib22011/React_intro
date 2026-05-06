import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Todo from "./todo";
import Actor from "./actor";

function App() {
  const [count, setCount] = useState(0);
  const actors = ["shakib", "imon", "rakib"];
  return (
    <>
      <h1>shakib</h1>
      {
        actors.map(act=>
          <Actor name={act}></Actor>)
      }
      <Person />
      <Person>shakib</Person>
      <Pet></Pet>
      <Student />
      <Dev id="11"></Dev>
      <Dev id="12"></Dev>
      <Dev id="13"></Dev>
      <Player name="Tamim" run="100"></Player>
      <Player name="Mostafiz"></Player>
      <Todo task="react" done={true}></Todo>
      <Todo task="js" done={false}></Todo>
      <Todo task="python" done={true}></Todo>
      <Todo task="ruby"></Todo>
    </>
  );
}

//component
function Person() {
  const age = 13;
  //css color
  const color = {
    color: "green",
    border: "2px solid green",
    borderRadius: "10px",
  };
  return (
    //wrapper
    <>
      <p style={color}>Ia am a person {13}</p>
      <Pet></Pet>
    </>
  );
}
//component
function Pet() {
  return <p>cat</p>;
}
function Student() {
  return (
    //custom css
    <div className="student">
      Name : <br />
      <br />
      Age :
    </div>
  );
}
function Dev(props) {
  // console.log(props)
  return (
    <div style={{ border: "2px solid green", borderRadius: "10px" }}>
      person : shakib <br />
      <br />
      age: {props.id}
    </div>
  );
}
function Player({ name, run = 0 }) {
  return (
    <div className="student">
      Name : {name}
      <br />
      run : {run}
    </div>
  );
}
export default App;
// export {Person}
