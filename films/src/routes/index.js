const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares")

const router = Router();

// Get
router.get("/", controllers.getFilms);
router.get("/:id", controllers.getFilmByID);

// Post
router.post("/", middlewares.filmValidation, controllers.createFilm)

// Put
router.put("/:id", controllers.updateFilm)

// Delete
router.delete("/:id", controllers.deleteFilm)

module.exports = router;
