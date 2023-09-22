const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares")

const router = Router();

// Get
router.get("/", controllers.getFilms);
router.get("/:id", controllers.getFilmByID);

// Post
router.post("/", middlewares.filmValidation, controllers.createFilm)

module.exports = router;
