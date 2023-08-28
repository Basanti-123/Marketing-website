const express = require("express");
const app = express();

const indexRouter = require("./routes");

// app.get("/", (req, res) => {
//   res.send("Hello Basanti");
// });

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", express.json());
app.use("/", indexRouter);

app.listen(3344);
console.log("App is running on port 3344");
