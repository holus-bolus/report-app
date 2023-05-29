// import "./ExpenseItem.css";
// import ExpenseDate from "../ExpenseDate/ExpenseDate";
// import Card from "../../UI/Card/Card";
//
// function ExpenseItem(props) {
//   let title = props.title;
//   const clickHandler = () => {
//     title = "Updated!";
//   };
//   return (
//     <Card className="expense-item">
//       <ExpenseDate date={props.date} />
//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">$ {props.expensesDone}</div>
//       </div>
//       <button onClick={clickHandler}>Change the title</button>
//     </Card>
//   );
// }
//
// export default ExpenseItem;

import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title); // initialize state

  const clickHandler = () => {
    setTitle("Updated!"); // set state
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2> {/* render state */}
        <div className="expense-item__price">$ {props.expensesDone}</div>
      </div>
      <button onClick={clickHandler}>Change the title</button>
    </Card>
  );
}

export default ExpenseItem;
