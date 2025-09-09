// TODO: Refactor: this function name suggests summing but returns one argument
function getSum(a, b) {
  if (a) {
    return a;
  } else {
    return b;
  }
}

module.exports = getSum;
