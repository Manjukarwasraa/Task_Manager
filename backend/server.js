const express = require("express");
const dotenv = require("dotenv");
const cors =  require("cors") 
const taskRoutes = require("./routes/taskRoutes");
const mongoose = require('mongoose');

dotenv.config();
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{console.log("MongoDb connected")})
  .catch((err)=>{console.log(Error, err)});

const app = express();

app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});