function solution(board, moves) {
  var answer = 0;
  let bucket = [];

  moves.forEach(move => {
    const index = board.findIndex(row => row[move - 1] > 0);
    if (index < 0) return;

    const doll = board[index][move - 1];

    if ([...bucket].pop() === doll) {
      bucket.pop();
      answer += 2;
    } else {
      bucket.push(doll);
    }

    board[index][move - 1] = 0;
  });
  return answer;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
