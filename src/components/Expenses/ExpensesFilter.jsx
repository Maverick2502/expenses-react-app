import "./ExpensesFilter.css";

function ExpensesFilter(props) {
  // 1
  function dropDownHandler(e) {
    // console.log(e.target.value);
    //  3
    props.onChangeFilter(e.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* 1.1 - onChange */}
        {/* 4.2 - props.selected */}
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
