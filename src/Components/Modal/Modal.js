import classes from "./Modal.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
const Modal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.okClicked}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.msg}</p>
        </div>
        <footer className={classes.actions}>
          {/* <button onClick={props.okClicked}>OK</button> */}
          <Button onClick={props.okClicked}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
export default Modal;
