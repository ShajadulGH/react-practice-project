import { useRef, useState, Fragment } from "react";
import classes from "./Form.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../Modal/Modal";
const Form = (props) => {
  const gotText = useRef();
  const gotAge = useRef();
  const [errorMsg, setErrorMsg] = useState();
  // const [enteredText, setEnteredText] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  // const userHandler = (e) => {
  //   setEnteredText(e.target.value);
  // };
  // const ageHandler = (e) => {
  //   setEnteredAge(e.target.value);
  // };
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredText = gotText.current.value;
    const enteredAge = gotAge.current.value;
    if (enteredText.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorMsg({
        title: "Invalid Inputs!",
        msg: "Input feilds can not be empty!",
      });
      return;
    } else if (+enteredAge < 1) {
      setErrorMsg({
        title: "Invalid Inputs!",
        msg: "Please enter a positive number (>0)",
      });
      return;
    }
    props.inputs(enteredText, enteredAge);
    gotText.current.value = "";
    gotAge.current.value = "";

    // setEnteredText("");
    // setEnteredAge("");
    // setErrorMsg(null);
  };
  const okHandler = () => {
    setErrorMsg(null);
  };

  return (
    <Fragment>
      {errorMsg && (
        <Modal
          title={errorMsg.title}
          msg={errorMsg.msg}
          okClicked={okHandler}
        ></Modal>
      )}

      <Card>
        <form onSubmit={submitHandler}>
          <div className={classes["form-control"]}>
            <label>Username</label>
            <input
              // value={enteredText}
              // onChange={userHandler}
              type="text"
              ref={gotText}
            ></input>
          </div>
          <div className={classes["form-control"]}>
            <label>Age</label>
            <input
              // value={enteredAge}
              // onChange={ageHandler}
              type="number"
              ref={gotAge}
            ></input>
          </div>
          <div className={classes["form-control"]}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};
export default Form;
