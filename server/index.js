const cors = require("cors");
const express = require("express");
const app = express();
const routerTasks = require("./routes/routerTasks");
const connection = require("./database/database");

connection();

app.use(express.json());
app.use(cors());
app.use("/api/tasks", routerTasks);
app.listen(8080, () => {
  console.log("Active server on port 8080");
});
