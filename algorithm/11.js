function solution(x, n) {
  let result = []
  let sum = 0
  while (true) {
    sum += x
    result.push(sum)
    if (result.length === n) {
      break
    }
  }
  return result
}
console.log(solution(-4, 2))