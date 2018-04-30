const userRepository = require("./userRepository");

async function sayHi(userId) {
  const user = await userRepository.getUser(userId);

  return "Hi " + user.name;
}

module.exports = {
  sayHi
};
