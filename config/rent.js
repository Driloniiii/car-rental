
const { MongoClient } = require("mongodb");

let dbInstance = null;

const connectDB = async () => {
  if (dbInstance) return dbInstance;  

  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB server");
    dbInstance = client.db("carRental");  
    return dbInstance;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw new Error("Database connection failed");
  }
};

module.exports = { connectDB };
