import React from "react";
import { useSelector } from "react-redux";

export default function ExpenseTotal() {
  // 모든 지출 내역 불러오기
  const expenseList = useSelector((store) => store.expense.expenseList);

  // reduce를 사용해 모든 price를 더하기
  const totalExpense = expenseList.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  // 수입액 불러오기
  const income = useSelector((store) => store.expense.income);

  // 잔액
  const balance = income - totalExpense;

  return (
    <>
      <div>
        <span>총 지출 : {totalExpense}</span>
        <span>원</span>
      </div>
      <div>
        <span>잔액 : {balance}</span>
        <span>원</span>
      </div>
    </>
  );
}
