import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

// 4
function NewExpense(props) {
  // 1.1
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      // enteredExpenseData receives 'expenseData'
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // 4.1
    props.onAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
      {/* onSave - 1 */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
