import "./ExpensesFilter.css";
// adding props
function ExpensesFilter(props) {
  // 1 triggering a function
  function dropDownHandler(e) {
    // console.log(e.target.value);
    //  2.2
    props.onChangeFilter(e.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* 1.1 - passing a 'pointer' to onChange={dropDownHandler} */}
        {/* 3.3 - props.selected */}
        <select value={props.selected} onChange={dropDownHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
