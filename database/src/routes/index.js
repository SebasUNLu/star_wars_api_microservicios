const { Router } = require("express");
const { validateModel } = require("../middlewares");
const { listModel, getModelById, insertModel, updateModel, deleteModel } = require("../controllers");

const router = Router();

// GET
router.get("/:model", validateModel, listModel);
router.get("/:model/:id", validateModel, getModelById);

// POST
router.post("/:model", validateModel, insertModel);

// PUT
router.put("/:model/:id", validateModel, updateModel)

// DELETE
router.delete("/:model/:id", validateModel, deleteModel)

module.exports = router;
