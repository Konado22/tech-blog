const express = require("express");
// const routes = require("./routes");
const exphbs = require("express-handlebars");
const path = require("path");
const { User } = require("./models");
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");
const session = require('express-session')
const SequelizeStore = require("connect-session-sequelize")(session.Store)
const initSession = {
  secret: 'itsasecret',
  resave: false,
  saveUninitialized: false,
};

app.use(session(initSession));

// const hbs = exphbs.create({ helpers });
// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on server "));
})
.catch (err  => {
console.log(err)
});
