import { useState } from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const [isValid, setIsValid] = useState();
  const clickHandler = () => {
    console.log("working");

    setIsValid(true);
    props.mod(isValid);
  };
  return (
    <div className={props.modal ? classes.module : classes.module2}>
      <p>The input Fields are empty!</p>
      <div>
        <button onClick={clickHandler}>OK</button>
      </div>
    </div>
  );
};
export default Modal;
