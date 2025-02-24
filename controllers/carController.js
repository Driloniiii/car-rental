
const { connectDB } = require("../config/rent");

const getRentalCars = async (req, res) => {
  const { year, color, steering_type, number_of_seats } = req.query;
  let filter = {};

  if (year) filter.year = parseInt(year);
  if (color) filter.color = color;
  if (steering_type) filter.steering_type = steering_type;
  if (number_of_seats) filter.number_of_seats = parseInt(number_of_seats);

  try {
    const db = await connectDB();
    const carsCollection = db.collection("cars");

    console.log("Filter:", filter);  

    const cars = await carsCollection.find(filter).sort({ price_per_day: 1 }).toArray();
    
    console.log("Cars found:", cars);  

    res.json(cars);
  } catch (error) {
    console.error("Error fetching rental cars:", error);
    res.status(500).json({ error: "Server error", message: error.message });
  }
};

module.exports = { getRentalCars };
