const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(
  cors({
    // exp://100.94.153.139:8081
    origin: "*", // Remplacez par l'origine de votre application React Native
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content",
      "Accept",
      "Content-Type",
      "Authorization",
    ],
  })
);
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('connected to db')
}).catch((e) => {
    console.log(e)
});

const UserRoutes = require("./routes/UserRoutes");
app.use("/api", UserRoutes);

const FormationRoutes = require("./routes/FormationRoutes");
app.use("/api/formations", FormationRoutes);

app.listen(8000, () => console.log(`server is running on port 8000`));
