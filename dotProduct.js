function solution(a, b) {
  let answer = 0;

  if (a.length !== b.length) return;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));

//function solution(a, b) {
//   return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
// }
