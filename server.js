const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080;

const reservations = [
  {
    name: "Jonathan",
    phoneNumber: "8888888888",
    email: "bob@gmail.com",
    uniqueId: "bobthebuilder",
  },
];

const waitList = [
  {
    name: "Jonathan",
    phoneNumber: "8888888888",
    email: "bob@gmail.com",
    uniqueId: "bobthebuilder",
  },
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// VIEWS ROUTES
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});
app.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/reservation-views.html"));
});
app.get("/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/reservation-form.html"));
});

// API ROUTES
app.get("/api/tables", (req, res) => {
  res.json({
    reservations: reservations,
    waitList: waitList,
  });
});

app.post("/api/tables", (req, res) => {
    
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
