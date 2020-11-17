// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello react</h1>
      <Nav name="NAVVV" />
      <Main />
    </div>
  );
}

function Nav(props) {
  return (
    <div>
      <h1>This is the {props.name} </h1>
    </div>
  );
}

function Main() {
  return (
    <div>
      <h1>This is the main</h1>
    </div>
  );
}

export default App;
