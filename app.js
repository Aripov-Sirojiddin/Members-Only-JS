const path = require("node:path");
const expressLayouts = require("express-ejs-layouts");
const express = require("express");
const db = require("./models/db");

//authentication imports
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

//Route Imports
const indexRouter = require("./routers/indexRouter");

//Controller Imports
const { signUp, createUser } = require("./controllers/signupControllers");
const {
  login,
  logout,
} = require("./controllers/authenticationControllers");

//App configs
const app = express();
const PORT = process.env.PORT || 3000;

//Setting up session tokens
app.use(
  session({
    secret: `${process.env.SESSION_SECRET}`,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.session());

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
app.post("/sign-up", createUser);

app.get("/logout", logout);
app.get("/login", login);
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/sign-up",
  })
);

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});
app.get("/sign-up", signUp);
app.use("/", indexRouter);

app.get("/*splat", (req, res) => {
  res.status(404).render(path.join(__dirname, "views/pages/404.ejs"));
});

//Passport.js

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await db.getUserByUsername(username);
      if (!user) {
        return done(null, false, { message: "Wrong credentials given." });
      }

      const isCorrectPassword = await bcrypt.compare(password, user.password);
      if (!isCorrectPassword) {
        return done(null, false, { message: "Wrong credentials given." });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.getUserById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

//Server run
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
