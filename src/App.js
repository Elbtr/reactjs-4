import Expense from "./components/Expense/Expense";
import NewExpense from "./components/newExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 282.23,
      date: new Date("March 28 2022"),
    },
    {
      id: "e2",
      title: "New Tv",
      amount: 282.23,
      date: new Date("March 28 2022"),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 282.23,
      date: new Date("March 28 2022"),
    },
    {
      id: "e4",
      title: "Bicycel",
      amount: 282.23,
      date: new Date("March 28 2022"),
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log("in App.js");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
};

export default App;
