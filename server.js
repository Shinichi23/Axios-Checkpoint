const express = require("express");
const axios = require("axios");
const app = express();
const port = 4000;

app.get("/:cityName", (req, res, next) => {
  axios
    .get(
      `api.openweathermap.org/data/2.5/weather?q=${req.params.cityName}&appid=7dff063d1af37b3761971574ddc4bbe3`
    )
    .then((data) => {
      res.json(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
