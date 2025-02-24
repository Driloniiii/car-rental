const { connectDB } = require("../config/rent");

let usersCollection = null;

const getUsersCollection = async () => {
  if (!usersCollection) {
    const db = await connectDB();
    usersCollection = db.collection("users"); 
  }
  return usersCollection;
};

module.exports = { getUsersCollection };
