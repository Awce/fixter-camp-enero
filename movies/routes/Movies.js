const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");


router.get("/new", (req, res) => {
  res.render("form");
})

router.get("/", (req, res) => {
  Movie.find()
  .then(movies => {
    res.render("list", {movies});
  })
})


router.get("/:id", (req, res) => {
  Movie.findById(req.params.id)
  .then(movie => {
    res.render("detail", {movie})
  })
})

router.post("/", (req, res) => {
  // crear pelicula
  Movie.create(req.body)
    .then( movie => {
      // si la creo correctamente mando a /movies/
      res.redirect("/movies/");
    })

})

router.post("/:id", (req, res) => {
  Movie.findByIdAndDelete(req.params.id)
  .then(movie => {
    res.redirect("/movies/")
  })
})

module.exports = router;