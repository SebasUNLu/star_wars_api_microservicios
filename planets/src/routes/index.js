const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares")

const router = Router();

// Get
router.get("/", controllers.getPlanets);
router.get("/:id", controllers.getPlanetById);

// Post
router.post("/", middlewares.planetValidation, controllers.createPlanet)

// Put
router.put("/:id", controllers.updatePlanet)

// Post
router.delete("/:id", controllers.deletePlanet)

module.exports = router;
