const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares")

const router = Router();

// Get
router.get("/", controllers.getCharacters);
router.get("/:id", controllers.getCharacterByID);

// Post
router.post("/", middlewares.characterValidation, controllers.createCharacter)

module.exports = router;
