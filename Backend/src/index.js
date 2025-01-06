const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');

const connectDB = require("../src/config/db.js"); // Import the db connection
const bookRouter = require("../router/bookRouter.js");
const userRouter = require("../router/userRouter.js")

dotenv.config();

const app = express();

app.use(cors());
const port = process.env.PORT || 3001;
const URI = process.env.MongoDBURI;

if (!URI) {
    console.error("Error: MongoDB URI is not defined in the environment variables.");
    process.exit(1);
}

// Connect to MongoDB
connectDB(URI);

// Middleware for parsing JSON
app.use(express.json());

// Defining routes
app.use("/book", bookRouter);
app.use("/user", userRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
