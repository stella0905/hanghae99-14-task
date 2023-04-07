function solution(arr1, arr2) {
  const Arr1 = arr1.flat()
  const Arr2 = arr2.flat()
  // let sum = []
  // for (let i = 0; i < Arr1.length; i++) {
  //   sum.push(Arr1[i] + Arr2[i])
  // }
  // let result = []
  // while (true) {
  //   result.push(sum.splice(0, arr1[0].length))
  //   if (sum.length === 0) {
  //     break
  //   }
  // }
  return Arr1, Arr2
}
console.log(solution([[1], [2]], [[3], [4]]))