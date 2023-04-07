function solution(absolutes, signs) {
  const arr = signs.map((e) => e === false ? -1 : 1)
  // const absArr = []
  // for (let i = 0; i < absolutes.length; i++) {
  //   absArr.push(absolutes[i] * arr[i])
  // }

  return arr;
}
console.log(solution([4, 7, 12], [true, false, true]))