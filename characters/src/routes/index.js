const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares")

const router = Router();

// Get
router.get("/", controllers.getCharacters);
router.get("/:id", controllers.getCharacterByID);

// Post
router.post("/", middlewares.characterValidation, controllers.createCharacter)

// Put
router.put("/:id", controllers.updateCharacter)

// delete
router.delete("/:id", controllers.deleteCharacter)

module.exports = router;
