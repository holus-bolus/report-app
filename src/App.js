import ExpenseItem from "./components/ExpenseItem";

function App() {
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
  return (
    <div>
      <div className="container">
        <h2>Let's get started!</h2>
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </div>
    </div>
  );
}

export default App;
