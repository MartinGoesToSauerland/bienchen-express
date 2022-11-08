const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: [
      'http://localhost:5173', 
      'http://localhost:8181', 
      'http://192.168.178.68:5173', 
      'https://bienchen-vue.onrender.com', 
      'https://bienchen.sejka-friends.de',
    ]
}));


console.log(`./.env.${process.env.NODE_ENV}`);
console.log("2.", process.env.EMAIL_PROVIDER);
console.log("3.", process.env.TEST);

const router = require("./routes/router.js");
const staticRouter = require("./routes/staticRouter")
app.use('/api', router);
app.use('/', staticRouter);

/*
app.get('/', (req, res) => {
    res.send('hello world')
  })

app.get("/users", (req, res, next) => {
    try {
      res.status(200).send({
        data: {msg: "hallo"}
      });
    } catch(err) {
      next(err);
    }
  });



router.post("/api/parcels", (req, res, next) => {
  try {
    res.status(200).send({
      data: {msg: "hallo"}
    });
  } catch(err) {
    next(err);
  }
});
*/

app.listen(PORT, () => {console.log("server running")});