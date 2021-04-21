import logo from "./assets/ZH style 2 WIP3pdf.jpg";
import './App.css';

function App() {
  return (
    <form className = "container">
      <img src={logo} alt="Logo" className = "logo"></img>
      <input type="email" placeholder="Email"></input>
      <input type="password" placeholder="Password" ></input>
      <button type = "submit" className="btn">Submit</button>
    </form>
  );
}

export default App;
