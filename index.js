const express = require("express");
const app = express();
const port = 3000;
const packageJson = require("./package.json");

// Add CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Mock data
const fruits = [
  { id: 1, name: "Apple", color: "red" },
  { id: 2, name: "Banana", color: "yellow" },
  { id: 3, name: "Orange", color: "orange" },
  { id: 4, name: "Grape", color: "purple" },
];

const vegetables = [
  { id: 1, name: "Carrot", color: "orange" },
  { id: 2, name: "Broccoli", color: "green" },
  { id: 3, name: "Spinach", color: "green" },
  { id: 4, name: "Tomato", color: "red" },
];

// Endpoints
app.get("/fruits", (req, res) => {
  res.json(fruits);
});

app.get("/vegetables", (req, res) => {
  // Simulate a server error
  res.status(500).json({
    error: "Failed to fetch vegetables data",
    message: "Internal server error",
  });

  return;

  res.json(vegetables);
});

// New version endpoint
app.get("/version", (req, res) => {
  res.json({ version: packageJson.version });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
