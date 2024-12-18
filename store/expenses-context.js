import { createContext, useReducer } from "react";

// const DUMMY_EXPENSES = [
//   {
//     id: "e1",
//     description: "A pair of shoes",
//     amount: 59.99,
//     date: new Date("2021-12-19"),
//   },
//   {
//     id: "e2",
//     description: "Macbook Air",
//     amount: 99.55,
//     date: new Date("2021-8-10"),
//   },
//   {
//     id: "e3",
//     description: "ipad 10th gen",
//     amount: 85.55,
//     date: new Date("2021-10-17"),
//   },
//   {
//     id: "e4",
//     description: "Graphic Card",
//     amount: 200,
//     date: new Date("2022-2-1"),
//   },
// ];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];

    case "SET":
      const inverted = action.payload.reverse();
      return inverted;

    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = {
        ...updatableExpense,
        ...action.payload.date,
      };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatedExpenses;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);

    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function setExpenses(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id, date: expenseData } });
  }

  const value = {
    expenses: expensesState,
    setExpenses,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
