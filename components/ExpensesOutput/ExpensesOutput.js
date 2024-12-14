import { FlatList, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "Macbook Air",
    amount: 99.55,
    date: new Date("2021-8-10"),
  },
  {
    id: "e3",
    description: "ipad 10th gen",
    amount: 85.55,
    date: new Date("2021-10-17"),
  },
  {
    id: "e4",
    description: "Graphic Card",
    amount: 200,
    date: new Date("2022-2-1"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
