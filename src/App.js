import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const SAMPLE_EXPENSES = [
  {
    id: "e1",
    title: "Huawei Mate 20 Pro",
    amount: 799,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Huawei Freebuds Pro",
    amount: 189,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Huawei Matebook D14",
    amount: 699,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Sony WH1000XM3",
    amount: 349,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(SAMPLE_EXPENSES);
  // 3
  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
