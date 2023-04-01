import logo from "./logo.svg";
import React, { useState } from "react";
import NavigationBar from "./components/Navbar/NavigationBar";
import "./App.css";
import InputText from "./components/InputText/InputText";
import UmContext from "./components/Context/UmContext";
import GameOver from "./components/GameOver/GameOver";

function App() {
  const [currentTaskNumber, setCurrentTaskNumber] = useState(1);
  const [totalTasks, setTotalTasks] = useState(7);
  const [currentGivenText, setCurrentGivenText] = useState("");
  const [userInputText, setUserInputText] = useState("");
  const [userStartedInput, setUserStartedInput] = useState(false);
  const [isTaskComplete, setIsTaskComplete] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

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
        isGameOver,
        setIsGameOver,
      }}
    >
      <div className="App">
        <header className="App-header">
          <NavigationBar />
          {!isGameOver && <InputText />}
          {isGameOver && <GameOver />}
        </header>
      </div>
    </UmContext.Provider>
  );
}

export default App;
