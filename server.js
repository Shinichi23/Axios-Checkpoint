const express = require("express");
const axios = require("axios");
const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

const url =
  "api.openweathermap.org/data/2.5/weather?q=kyoto&appid=7dff063d1af37b3761971574ddc4bbe3";

app.get("/kyoto", (req, res, next) => {
  axios
    .get(url)
    .then((data) => {
      res.json(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
