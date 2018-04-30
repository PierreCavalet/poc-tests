const users = {
  user1: { name: "Sam" },
  user2: { name: "DaB" },
  user3: { name: "Antonin" },
  user4: { name: "Rémi" },
  user5: { name: "Jordan" },
  user6: { name: "Pierre" }
};

function getUser(userId) {
  return new Promise((resolve, reject) => {
    if (users[userId]) {
      resolve(users[userId]);
      return;
    }

    reject(new Error("Not found"));
  });
}

module.exports = {
  getUser
};
