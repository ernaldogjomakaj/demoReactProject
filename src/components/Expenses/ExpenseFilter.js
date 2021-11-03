// import { useState } from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
//   const [selectedOption, setSelectedOption] = useState("");

  const onSelectHandler = (event) => {
    // setSelectedOption(event.target.value);
    props.onSelectFilter(event.target.value);
    
  };

//   props.onSelectFilter(selectedOption);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="">Filter by Year</label>
        <select value={props.selected} onChange={onSelectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
