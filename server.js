const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);


require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/products");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/", productRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;