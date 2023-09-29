/* import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />); */

import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number"); // 수량
const quantity = document.getElementById("quantity"); // 페이지 하단에 총 수량
const totalPrice = document.getElementById("total"); // 페이지 하단에 총 가격

const PRICE = 17500;

// store 생성하기
const store = createStore(countReducer);

// reducer 함수 -> 매개변수에서 state 바로 초기화해줄 수 있음
function countReducer(state = 0, action) {
  // if-else보다 직관적인 switch문 사용
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUBTRACT":
      return state - 1;
    default:
      return state;
  }
}

// action 함수
// dispatch를 이용하여 reducer에게 action을 넘겨줌
const addNumber = () => {
  store.dispatch({ type: "ADD" });
};

const subtractNumber = () => {
  store.dispatch({ type: "SUBTRACT" });
};

// subscribe 함수
// render 함수를 감지하고 있다가 state 값이 바뀌면 실행
const handleWrite = () => {
  number.textContent = store.getState();
  quantity.textContent = store.getState();
  totalPrice.textContent = store.getState() * PRICE;
};

store.subscribe(handleWrite);

// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", subtractNumber);
