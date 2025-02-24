
const { carsCollection } = require("../config/rent");

const getCars = async (filter = {}) => {
  try {
    const cars = await carsCollection.find(filter).toArray();
    return cars;
  } catch (error) {
    console.error("Error getting cars:", error);
    throw error;
  }
};

const addCar = async (carData) => {
  try {
    const result = await carsCollection.insertOne(carData);
    return result;
  } catch (error) {
    console.error("Error adding car:", error);
    throw error;
  }
};

const updateCar = async (carId, updatedData) => {
  try {
    const result = await carsCollection.updateOne(
      { _id: carId },
      { $set: updatedData }
    );
    return result;
  } catch (error) {
    console.error("Error updating car:", error);
    throw error;
  }
};

const deleteCar = async (carId) => {
  try {
    const result = await carsCollection.deleteOne({ _id: carId });
    return result;
  } catch (error) {
    console.error("Error deleting car:", error);
    throw error;
  }
};

module.exports = { getCars, addCar, updateCar, deleteCar };
