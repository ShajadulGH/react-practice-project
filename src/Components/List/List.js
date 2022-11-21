import classes from "./List.module.css";
import ListItem from "./ListItem";
const List = (props) => {
  console.log(props.inputList);
  return (
    <ul className={classes.list}>
      {props.inputList.map((item) => (
        <ListItem key={item.id} name={item.name} age={item.age}></ListItem>
      ))}
    </ul>
  );
};
export default List;
