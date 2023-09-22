const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares")

const router = Router();

// Get
router.get("/", controllers.getPlanets);
router.get("/:id", controllers.getPlanetById);

// Post
router.post("/", middlewares.planetValidation, controllers.createPlanet)

module.exports = router;
