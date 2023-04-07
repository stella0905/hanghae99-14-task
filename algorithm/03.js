function solution(s) {
  const arr = [...s]

  if (s.length % 2 === 0) {
    return (arr[(arr.length / 2) - 1], arr[arr.length / 2]).join("")

  } else {
    result.push(arr[parseInt(arr.length / 2)])
  }

}

console.log(solution("abcded"))