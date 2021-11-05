import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";


const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2019");

  const selectFilterHandler = (filteredYear) => {
    console.log("In Expenses.js");
    setSelectedYear(filteredYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });


  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onSelectFilter={selectFilterHandler}
      />

    </Card>
  );
};

export default Expenses;
