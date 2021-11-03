import React from "react";
import Expenses from "./components/Expenses/Expenses";
import expenses from "./components/Expenses/ExpenseData";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  // return React.createElement("div", {}, React.createElement("h2", {}, "yooo"),
  // React.createElement(Expenses,{items:expenses}));

  const addExpenseHandler = (expense) => {
    console.log("inApp.js ");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
