import React from "react";
import Expenses from "./components/Expenses/Expenses";
import DUMMY_EXPENSES from "./components/Expenses/ExpenseData";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const App = () => {
  // return React.createElement("div", {}, React.createElement("h2", {}, "yooo"),
  // React.createElement(Expenses,{items:expenses}));

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
