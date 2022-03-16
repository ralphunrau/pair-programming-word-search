const wordSearch = (letters, word) => { 
    if (letters === []) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    let switcheroo = transpose(letters);
    switcheroo = switcheroo.map(ls => ls.join(''))
    for (x of switcheroo) {
        if (x.includes(word)) return true
    }
    return false;
}

const transpose = function(matrix) {
    let newArr = [];
    for (let x = 0; x < matrix[0].length; x++) {
      newArr.push([]);
    }
    for (let x = 0; x < matrix.length; x++) {
      for (let y = 0; y < matrix[x].length; y++) {
        newArr[y].push(matrix[x][y]);
      }
    }
    return newArr;
  };

module.exports = wordSearch