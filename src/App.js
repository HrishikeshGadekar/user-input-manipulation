import logo from "./logo.svg";
import React, { useState } from "react";
import NavigationBar from "./components/Navbar/NavigationBar";
import "./App.css";
import InputText from "./components/InputText/InputText";
import UmContext from "./components/Context/UmContext";

function App() {
  const [currentTaskNumber, setCurrentTaskNumber] = useState(1);
  const [totalTasks, setTotalTasks] = useState(7);
  const [currentGivenText, setCurrentGivenText] = useState("");
  const [userInputText, setUserInputText] = useState("");
  const [userStartedInput, setUserStartedInput] = useState(false);
  const [isTaskComplete, setIsTaskComplete] = useState(false);

  return (
    <UmContext.Provider
      value={{
        currentTaskNumber,
        setCurrentTaskNumber,
        totalTasks,
        setTotalTasks,
        currentGivenText,
        setCurrentGivenText,
        userInputText,
        setUserInputText,
        userStartedInput,
        setUserStartedInput,
        isTaskComplete,
        setIsTaskComplete,
      }}
    >
      <div className="App">
        <header className="App-header">
          <NavigationBar />
          <InputText />
        </header>
      </div>
    </UmContext.Provider>
  );
}

export default App;
