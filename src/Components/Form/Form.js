import { useState } from "react";
import classes from "./Form.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
const Form = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const userHandler = (e) => {
    setEnteredText(e.target.value);
  };
  const ageHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredText.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValid(false);
      props.module(isValid);
      console.log(isValid);
    } else {
      const allInputs = {
        name: enteredText,
        age: enteredAge,
      };
      props.inputs(allInputs);
    }
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes["form-control"]} ${
            !isValid && classes.invalid
          }`}
        >
          <label>Username</label>
          <input onChange={userHandler} type="text"></input>
        </div>
        <div className={classes["form-control"]}>
          <label>Age</label>
          <input onChange={ageHandler} type="number"></input>
        </div>
        <div className={classes["form-control"]}>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};
export default Form;
