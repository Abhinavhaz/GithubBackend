// const express = require("express");
// const connectDB = require("./config/db");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const userRoutes = require("./routes/userRoutes");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect MongoDB
// connectDB();

// // Routes
// app.use("/api/users", userRoutes);

// // Start server
// const PORT = 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect MongoDB
connectDB();

// Routes
app.use("/api/users", userRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
