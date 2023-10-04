import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    // 사용자의 지출 목록 관리
    expenseList: [
      { name: "coffee", price: 5000 },
      { name: "icecream", price: 1500 },
    ],
    income: 1000000,
  },
  reducers: {
    // addExpenseAction, setIncomeAction => 액션 type

    // 사용자의 지출 내역을 store에 반영
    addExpenseAction: (currentSlice, action) => {
      // slice의 expenseList에 접근하여 데이터를 수정
      currentSlice.expenseList.push(action.payload);
    },
    // 사용자의 수입을 store에 반영
    setIncomeAction: (currentSlice, action) => {
      console.log("setIncomeAction");
      currentSlice.income = action.payload;
    },
  },
});

// 액션을 디스패치에서 사용할 수 있도록 밖으로 내보냄
export const { addExpenseAction, setIncomeAction } = expenseSlice.actions;

// slice에서 생성한 reducer들을 밖으로 내보냄
export default expenseSlice.reducer;
