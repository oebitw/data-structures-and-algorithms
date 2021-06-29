'Use strict';

function leftJoin(leftHash, rightHash) {
  let output = [];

  for (let i = 0; i <= leftHash.table.length - 1; i++) {
    if (leftHash.table[i]) {
      let key = [Object.keys(leftHash.table[i].head.value)[0]][0];
      let value = [Object.values(leftHash.table[i].head.value)[0]][0];
      output.push([key, value]);

      if (leftHash.table[i].head.next) {
        let current = leftHash.table[i].head.next;

        while (current) {
          let key = Object.keys(current.value)[0];
          let value = Object.values(current.value)[0];
          output.push([key, value]);
          current = current.next;
        }
      }
    }
  }
  for (let j = 0; j <= output.length - 1; j++) {
    let join = rightHash.get(output[j][0]);
    output[j].push(join);
  }
  return output.length === 0 ? null : output;
}

module.exports = leftJoin;
