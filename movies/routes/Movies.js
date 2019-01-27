const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");


router.get("/new", (req, res) => {
  res.render("form");
})

router.post("/", (req, res) => {

  Movie.create(req.body)
    .then( movie => {
      console.log(movie);
    })

})

module.exports = router;