// 로또 번호 만들기
function lotto() {
  const arr = [];
  while (arr.length < 6) {
    const num = parseInt(Math.random() * 45 + 1);

    if (arr.indexOf(num) === -1) {
      // !arr.includes(num)
      arr.push(num);
    }
  }
  arr.sort((a, b) => a - b);
  return arr;
}
