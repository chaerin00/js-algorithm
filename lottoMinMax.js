//my-solution
function solution(lottos, win_nums) {
  var answer = [];
  var same = [];
  win_nums.forEach(num => lottos.forEach(lotto => lotto === num && same.push(lotto)));
  const zero = lottos.filter(lotto => lotto === 0);
  var min = 7 - same.length;
  var max = 7 - same.length - zero.length;

  answer.push(max > 6 ? 6 : max);
  answer.push(min > 6 ? 6 : min);
  return answer;
}

//best-solution
// function solution(lottos, win_nums) {
//   const rank = [6, 6, 5, 4, 3, 2, 1];

//   let minCount = lottos.filter(v => win_nums.includes(v)).length;
//   let zeroCount = lottos.filter(v => !v).length;

//   const maxCount = minCount + zeroCount;

//   return [rank[maxCount], rank[minCount]];
// }
