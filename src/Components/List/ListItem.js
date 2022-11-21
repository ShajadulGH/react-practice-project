import classes from "./ListItem.module.css";
const ListItem = (props) => {
  return (
    <li className={classes.listitem}>
      {props.name} ({props.age} Yaers Old)
    </li>
  );
};
export default ListItem;
