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

const store = createStore(countReducer);

function countReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUBSTRACT":
      return state - 1;
    default:
      return state;
  }
}

// let count = 0;

// UI Update - text
/* const updateResult = (c) => {
    number.innerText = count;
    quantity.innerHTML = c;
    totalPrice.innerHTML = c * PRICE;
}; */

// State Change
const addNumber = () => {
  /*  count += 1;
    minus.disabled = false;
    updateResult(count); */
  store.dispatch({ type: "ADD" });
};

// State Change
const substractNumber = () => {
  /* count -= 1;
    plus.disabled = false;
    updateResult(count); */
  store.dispatch({ type: "SUBSTRACT" });
};

// Init
//number.textContent = count;
//updateResult(count);

// render 함수
const handleWrite = () => {
  number.textContent = store.getState();
  quantity.textContent = store.getState();
  totalPrice.textContent = store.getState() * PRICE;
};

store.subscribe(handleWrite);

// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);
