const { Router } = require("express");
const { validateModel } = require("../middlewares");
const { listModel, getModelById, insertModel } = require("../controllers");

const router = Router();

router.get("/:model", validateModel, listModel);

router.get("/:model/:id", validateModel, getModelById);

router.post("/:model", validateModel, insertModel);

module.exports = router;
