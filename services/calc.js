function sum(a, b) {
  return a + b;
}

function asynchronousSum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      const result = sum(a, b);
      resolve(result);
    }, 10);
  });
}

module.exports = {
  sum,
  asynchronousSum
};
