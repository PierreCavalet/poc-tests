function sum(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw Error("One parameter is not an integer");
  }

  return a + b;
}

function asynchronousSum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      try {
        const result = sum(a, b);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    }, 10);
  });
}

module.exports = {
  sum,
  asynchronousSum
};
