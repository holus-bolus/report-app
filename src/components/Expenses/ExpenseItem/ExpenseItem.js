import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";

function ExpenseItem(props) {
  let title = props.title;
  const clickHandler = () => {
    title = "Updated!";
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.expensesDone}</div>
      </div>
      <button onClick={clickHandler}>Change the title</button>
    </Card>
  );
}

export default ExpenseItem;
