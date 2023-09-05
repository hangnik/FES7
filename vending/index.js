import ColaGenerator from "./js/colaGenerator.js";
import VendingMachineFunc from "./js/vendingMachineFunc.js";

const colaGenerator = new ColaGenerator();
await colaGenerator.setUp();

const vendingMachineFunc = new VendingMachineFunc();
vendingMachineFunc.setUp();
// vendingMachineFunc.bindEvents();

// 최상위 모듈에서만 async 없이도 await를 사용할 수 있음
// console.log(await colaGenerator.loadData());
