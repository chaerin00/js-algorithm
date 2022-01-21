function solution(id_list, report, k) {
  var answer = [];
  const reportIdList = [];
  for (var i = 0; i < id_list.length; i++) {
    reportIdList.push([]);
    answer[i] = 0;
  }
  report.forEach(element => {
    const [user, ID] = element.split(" ");
    const reportedID = id_list.findIndex(id => id === ID);
    if (!reportIdList[reportedID].find(id => id === user)) {
      reportIdList[reportedID].push(user);
    }
  });

  reportIdList.forEach(item => {
    if (item.length >= k) {
      item.forEach(user => {
        const userID = id_list.findIndex(id => id === user);
        answer[userID] += 1;
      });
    }
  });

  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);

// function solution(id_list, report, k) {
//   report = [...new Set(report)];
//   const reported = report.map(el => el.split(' ')[1]);
//   const reported_final = [];
//   const count = new Array(id_list.length).fill(0);
//   reported.forEach(el => {
//       count[id_list.indexOf(el)]++;
//   });
//   count.forEach((el, i) => {
//       if(el >= k) {
//           reported_final.push(id_list[i])
//       }
//   });
//   count.fill(0);
//   report.forEach((el) => {
//       el = el.split(' ');
//       if(reported_final.includes(el[1])) {
//           count[id_list.indexOf(el[0])]++;
//       }
//   })

//   return count;
// }
