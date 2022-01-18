function solution(numbers) {
  let answer = 0;
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  list.forEach(n => {
    if (!numbers?.includes(n)) {
      answer = answer + n;
    }
  });
  return answer;
}

console.log(solution([5, 8, 4, 0, 6, 7, 9]));

// function solution(numbers) {
//   return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
// }
