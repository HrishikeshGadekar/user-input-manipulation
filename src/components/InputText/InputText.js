import React, { useState } from "react";
import "./InputText.css";

function InputText() {
  const [textToDisplay, setTextToDisplay] = useState(
    "Please start typing in the input box below ..."
  );
  const [userInputBarText, setUserInputBarText] = useState("");

  const setTextAsInput = (e) => {
    setTextToDisplay(e.target.value);
  };

  return (
    <>
      <div id="outerBlock">
        <div className="container mb-3">
          <div className="row innerBox">
            <div className="col-md-5" id="leftBlock">
              <h4>Given Text:</h4>
              <div id="textBlock">Learning is a key thing for success</div>
            </div>
            <div className="col-md-7" id="rightBlock">
              <h4>Your input:</h4>
              <div id="userInputBlock">{textToDisplay} </div>
              <div className="inputBarBlock">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">&gt;</span>
                  </div>
                  <textarea
                    class="form-control"
                    aria-label="With textarea"
                    onChange={setTextAsInput}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputText;
