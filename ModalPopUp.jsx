import React, { useState, useRef } from "react";

function ModalPopUp() {
  const [displayBox, setDisplayBox] = useState(true);

  const buttonRef = useRef();

  function handleModalPopup() {
    document.body.style.backgroundColor = "lightgreen";
    setDisplayBox(true);
    buttonRef.current.style.display = "none";
  }

  function handleDisappearBox() {
    setDisplayBox(false);
    document.body.style.backgroundColor = "";
  }

  return (
    <>
      {displayBox === true ? (
        <div className="container">
          <div className="box">
            <span className="close-button" onClick={handleDisappearBox}>
              ❌
            </span>
            <header>Customized Header</header>
            <p>Customized body</p>
            <footer>Customized Footer</footer>
          </div>
        </div>
      ) : (
        <div className="modal-btn">
          <button onClick={handleModalPopup} ref={buttonRef}>
            Open Modal Popup
          </button>
        </div>
      )}
    </>
  );
}

export default ModalPopUp;
