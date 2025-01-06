const mongoose = require("mongoose");

const connectDB = async (URI) => {
    try {
        await mongoose.connect(URI); // No additional options required
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit process 
    }
};

module.exports = connectDB;
