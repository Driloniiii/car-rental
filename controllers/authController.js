const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUsersCollection } = require("../models/userModel");
const { ObjectId } = require("mongodb");

const register = async (req, res) => {
    const { fullName, email, username, password } = req.body;
    if (!fullName || !email || !username || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const usersCollection = await getUsersCollection(); 

        const existingUser = await usersCollection.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await usersCollection.insertOne({
            fullName,
            email,
            username,
            password: hashedPassword,
        });

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const usersCollection = await getUsersCollection(); 

        const user = await usersCollection.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({ token });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const myProfile = async (req, res) => {
    try {
        const usersCollection = await getUsersCollection(); 

        const userId = new ObjectId(req.user.id);
        const user = await usersCollection.findOne(
            { _id: userId },
            { projection: { password: 0 } }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

module.exports = { register, login, myProfile };
