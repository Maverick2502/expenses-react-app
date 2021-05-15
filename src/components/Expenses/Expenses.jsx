import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  // 3
  const [filteredYear, setFilteredYear] = useState("2021");
  // 2
  function filterChangeHandler(selectedYear) {
    // 3.1
    setFilteredYear(selectedYear);
  }
  return (
    <Card className="expenses">
      {/* 2.1 - onChangeFilter */}
      {/* 3.2 - selected */}
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
