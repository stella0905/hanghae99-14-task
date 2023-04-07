function solution(a, b) {
  let arr = []
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    arr.push(i)
  }
  return arr.reduce((a, b) => a + b);
}
console.log(solution(3, 5))