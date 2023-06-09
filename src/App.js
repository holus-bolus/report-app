// import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

import DisplayExpenses from "./components/Expenses/DisplayExpenses/DisplayExpenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Motorcycle Insurance",
      amount: 192.53,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Boat Insurance",
      amount: 1400.5,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Truck Insurance",
      amount: 793.45,
      date: new Date(2021, 2, 28),
    },
  ];
  // return React.createElement('div', {},
  //   React.createElement('h2', {}, "Let's get started!")
  // );

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <div className="container">
        <NewExpense onAddExpense={addExpenseHandler} />
        <DisplayExpenses items={expenses} />
      </div>
    </div>
  );
};

export default App;
