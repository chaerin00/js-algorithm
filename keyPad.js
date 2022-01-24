function getLine(num) {
  return Math.ceil(num / 3);
}

function solution(numbers, hand) {
  var answer = "";
  let L = 10;
  let R = 12;
  const newNums = numbers.map(num => (num === 0 ? 11 : num));
  newNums.forEach(num => {
    switch (num % 3) {
      case 1:
        L = num;
        answer += "L";
        break;
      case 0:
        R = num;
        answer += "R";
        break;
      case 2:
        const rowL = L % 3 === 2 ? 0 : 1;
        const rowR = R % 3 === 2 ? 0 : 1;
        const dL = Math.abs(getLine(num) - getLine(L)) + rowL;
        const dR = Math.abs(getLine(num) - getLine(R)) + rowR;
        if (dL < dR) {
          L = num;
          answer += "L";
        } else if (dL > dR) {
          R = num;
          answer += "R";
        } else {
          switch (hand) {
            case "left":
              L = num;
              answer += "L";
              break;
            case "right":
              R = num;
              answer += "R";
              break;
          }
        }
        break;
    }
  });
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));

// function solution(numbers, hand) {
//   hand = hand[0] === "r" ? "R" : "L"
//   let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2]
//   let h = { L: [1, 1], R: [1, 1] }
//   return numbers.map(x => {
//     if (/[147]/.test(x)) {
//       h.L = [position[x], 1]
//       return "L"
//     }
//     if (/[369]/.test(x)) {
//       h.R = [position[x], 1]
//       return "R"
//     }
//     let distL = Math.abs(position[x] - h.L[0]) + h.L[1]
//     let distR = Math.abs(position[x] - h.R[0]) + h.R[1]
//     if (distL === distR) {
//       h[hand] = [position[x], 0]
//       return hand
//     }
//     if (distL < distR) {
//       h.L = [position[x], 0]
//       return "L"
//     }
//     h.R = [position[x], 0]
//     return "R"
//   }).join("")
// }
