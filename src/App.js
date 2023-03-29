import logo from "./logo.svg";
import NavigationBar from "./components/Navbar/NavigationBar";
import "./App.css";
import InputText from "./components/InputText/InputText";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar/>
        <InputText/>

      </header>
    </div>
  );
}

export default App;
