import { useState } from "react";
import Modal from "./Components/Modal/Modal";
import List from "./Components/List/List";
import classes from "./App.module.css";
import Form from "./Components/Form/Form";
function App() {
  const [modalValue, setModalValue] = useState(true);
  const showHide = (module) => {
    setModalValue(module);
    console.log(modalValue);
  };

  const [receivedInputs, setRecivedInputs] = useState([
    { id: "e1", name: "Rahe", age: 25 },
  ]);
  const receivingInputs = (inputs) => {
    setRecivedInputs((prev) => {
      return [{ inputs, id: Math.random().toString() }, ...prev];
    });
    console.log(receivedInputs);
  };
  return (
    <div className={classes.main}>
      <Form module={showHide} inputs={receivingInputs}></Form>
      <Modal mod={showHide} modal={modalValue}></Modal>
      <List inputList={receivedInputs}></List>
    </div>
  );
}
export default App;
