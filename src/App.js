// import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

import DisplayExpenses from "./components/DisplayExpenses/DisplayExpenses";

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
        <DisplayExpenses items={expenses}/>
      </div>
    </div>
  );
}

export default App;
