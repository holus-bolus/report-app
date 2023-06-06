import "./DisplayExpenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

function DisplayExpenses(props) {
  return (
    <div className="display-expenses">
      <ExpenseItem
        title={props.items[0].title}
        expensesDone={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        expensesDone={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        expensesDone={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        expensesDone={props.items[3].amount}
        date={props.items[3].date}
      />
    </div>
  );
}

export default DisplayExpenses;
