const transpose = function (matrix) {
    let transposeArray = [];
    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        if (x > transposeArray.length - 1) {
          transposeArray.push([]);
        }
        transposeArray[x].push(matrix[y][x])
      }
    }
    return transposeArray;
  }
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    // console.log(verticalJoin);
    for (let arr of horizontalJoin) {
        if (arr.includes(word)){
            return true;
        }
    }
    for (let arrv of verticalJoin) {
        if (arrv.includes(word)){
            return true;
        }
    }
    return false
}

module.exports = wordSearch