import React from "react";
import { useSelector } from "react-redux";
import List from "../../components/List/List";

export default function ExpenseList() {
  // 데이터 불러오기
  const expenseList = useSelector((store) => store.expense.expenseList);

  return <List items={expenseList} />;
}
