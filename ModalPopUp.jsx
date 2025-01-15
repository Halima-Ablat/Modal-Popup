import React, { useState } from "react";

function ModalPopUp() {

  const [displayBox, setDisplayBox] = useState(true);

  function handleModalPopup() {
    document.body.style.backgroundColor = "lightgreen";
    setDisplayBox(true)
    
  }

  function handleDisappearBox(){
   setDisplayBox(false);
   document.body.style.backgroundColor = "";
  }

  return (
    <>
      <button onClick={handleModalPopup}>Open Modal Popup</button>
      {displayBox && ( <div className="container">
        <div className="box">
          <span className="close-button" onClick={handleDisappearBox}>❌</span>
          <header>Customized Header</header>
          <p>Customized body</p>
          <footer>Customized Footer</footer>
        </div>
      </div>
    )}
     
    </>
  );
}

export default ModalPopUp;
