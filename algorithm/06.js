function solution(numbers) {
  let number = 0
  for (let i = 0; i <= 9; i++) {
    if (numbers.indexOf(i) === -1) {
      number += i
    }
  }
  return number;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]))