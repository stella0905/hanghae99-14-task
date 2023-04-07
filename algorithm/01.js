function solution(nm) {
  const n = nm.split(" ").map((v) => +v)
  let star = "*".repeat(n[0])
  let result = star
  for (let i = 1; i < n[1]; i++) {
    result += "\n" + star
  }
  return result;
}

console.log(solution("5 3"))

// 왜 위코드를 넣었을때 안되는가???

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
// const n = data.split(" ");
// const a = Number(n[0]), b = Number(n[1]);

// const str = "*".repeat(a);

// for (let i = 0; i <b; i++){
// console.log(str);
// }
// });
