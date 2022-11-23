import { useState } from "react";
import List from "./Components/List/List";
import classes from "./App.module.css";
import Form from "./Components/Form/Form";
function App() {
  const [receivedInputs, setRecivedInputs] = useState([
    { id: "e1", name: "Rahe", age: 25 },
  ]);
  const receivingInputs = (text, age) => {
    setRecivedInputs((prev) => {
      return [{ id: Math.random().toString(), name: text, age: age }, ...prev];
    });
    console.log(receivedInputs);
  };
  return (
    <div className={classes.main}>
      <Form inputs={receivingInputs}></Form>
      <List inputList={receivedInputs}></List>
    </div>
  );
}
export default App;
