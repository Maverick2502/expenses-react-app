import { useState } from "react";
import { flushSync } from "react-dom";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

// 4
function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  // 1.1
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      // enteredExpenseData receives 'expenseData'
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // 4.1
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  function startEditingHandler() {
    setIsEditing(true);
  }

  function stopEditingHandler() {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {/* onSave - 1 */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
