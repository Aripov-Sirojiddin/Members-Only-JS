const path = require("node:path");
const expressLayouts = require("express-ejs-layouts");
const express = require("express");
const indexRouter = require("./routers/indexRouter");

const app = express();
const PORT = process.env.PORT || 3000;

//Setting up the path for views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Setting up path for the public folder
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

//Enables the POST request to return a JSON for processing.
app.use(express.urlencoded({ extended: true }));

//Enables one root layout to prevent repetative code.
app.use(expressLayouts);
app.set("layout", "layout");

//Routes
app.use("/", indexRouter);
app.use("/new", indexRouter);

app.get("/*splat", (req, res) => {
  res.status(404).render(path.join(__dirname, "views/pages/404.ejs"));
});


//Server run 
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
