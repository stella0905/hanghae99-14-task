function solution(numbers) {
  let number = 0
  for (let i = 0; i < number.length; i++) {
    if (indexOf(numbers[i]) === -1) {
      number += numbers[i]
    }
  }

  return number;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]))