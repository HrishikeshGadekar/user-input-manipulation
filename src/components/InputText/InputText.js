import React, { useContext, useEffect, useState } from "react";
import UmContext from "../Context/UmContext";
import LeftBlock from "../LeftBlock/LeftBlock";
import RightBlock from "../RightBlock/RightBlock";
import "./InputText.css";

function InputText() {
  const { currentTaskNumber, setCurrentTaskNumber } = useContext(UmContext);
  const { currentGivenText, setCurrentGivenText } = useContext(UmContext);
  const { userInputText, setUserInputText } = useContext(UmContext);
  const { totalTasks, setTotalTasks } = useContext(UmContext);
  const { userStartedInput, setUserStartedInput } = useContext(UmContext);
  const { isTaskComplete, setIsTaskComplete } = useContext(UmContext);
  const { isGameOver, setIsGameOver } = useContext(UmContext);

  const [taskSubmitButtonDisabled, setTaskSubmitButtonDisabled] = useState(
    !userStartedInput
  );
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [result, setResult] = useState("");

  useEffect(() => {
    setTaskSubmitButtonDisabled(!userStartedInput);
  }, [userStartedInput]);

  const handleSubmitCheck = (e) => {
    const isUserRight = currentGivenText == userInputText;
    console.log("isUserRight: ", isUserRight);
    if (isUserRight) {
      setResult("That's correct!");
      setIsTaskComplete(true);
      setShowSubmitButton(false);
    } else {
      setResult("Wrong input! Please retry.");
    }
  };

  const handleNext = (e) => {
    if (currentTaskNumber == totalTasks) {
      setIsGameOver(true);
    }

    const currentTask = currentTaskNumber;
    setCurrentTaskNumber(currentTask + 1);
    setIsTaskComplete(false);
    setUserInputText("");
    setResult("");
    setUserStartedInput(false);
    setShowSubmitButton(true);
  };

  return (
    <>
      <div id="outerBlock">
        <div className="container">
          <div className="row" id="TaskInstructionsTab">
            <div className="col-md-11" id="taskNumberPanel">
              Task {currentTaskNumber}/{totalTasks}{" "}
            </div>
            <div className="col-md-1" id="instructionsPanel">
              <button
                type="button"
                id="instructions-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Instructions
              </button>
            </div>
          </div>
          <div className="row" id="innerBlock">
            <LeftBlock />
            <RightBlock />
          </div>

          <div className="row" id="endRow">
            {isTaskComplete && (
              <div
                className="col-md-10"
                id="resultsBlock"
                style={{ color: "green" }}
              >
                {result}
              </div>
            )}
            {!isTaskComplete && (
              <div
                className="col-md-10"
                id="resultsBlock"
                style={{ color: "red" }}
              >
                {result}
              </div>
            )}
            <div className="col-md-2" id="submitBtnBlock">
              {!isTaskComplete && (
                <button
                  className="btn-secondary"
                  id="submitbtn"
                  disabled={taskSubmitButtonDisabled}
                  onClick={handleSubmitCheck}
                >
                  Submit
                </button>
              )}
              {isTaskComplete && (
                <button
                  className="btn-secondary"
                  id="nextbtn"
                  onClick={handleNext}
                >
                  Next &gt;
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Modal */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  User Instructions
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <ol>
                  WELCOME TO TYPING SIMULATOR!
                  <br />
                  Please find the instructions below:
                  <li>Type exactly what you see on your left screen.</li>
                  <li>Make sure to look at the screen at all times.</li>
                  <li> Do not turn your head away from the screen.</li>
                  <li>
                    Once you press the 'Ok' button you have entered the
                    simulator.
                  </li>
                </ol>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputText;
