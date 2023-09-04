import ColaGenerator from "./js/colaGenerator.js";

const colaGenerator = new ColaGenerator();
colaGenerator.setUp();

// 최상위 모듈에서만 async 없이도 await를 사용할 수 있음
// console.log(await colaGenerator.loadData());
