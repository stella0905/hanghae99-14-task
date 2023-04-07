function solution(arr) {
  const Arr = [...arr]
  let result = []

  for (let i = 0; i < Arr.length; i++) {
    if (result.length < Arr.length - 4) {
      result.push("*")
    } else {
      result.push(Arr[i])
    }
  }
  return result.join("")
}
console.log(solution("01033334444"))