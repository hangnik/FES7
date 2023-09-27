import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";

// 상태저장소 등록
const store = createStore(rootReducer);
//console.log(store.getState());

const container = document.getElementById("root");
const root = createRoot(container);

// Provider를 통해 App 컴포넌트 안의 모든 컴포넌트가 store에 접근할 수 있도록 함
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
