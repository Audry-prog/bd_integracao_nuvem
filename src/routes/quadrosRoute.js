const express = require("express")
const router = express.Router()
const controller = require("../controllers/quadrosController")

router.get("/", controller.getAllQuadros)
router.get("/nomeDoQuadro", controller.getPorNomeDoQuadro)
router.get("/:id", controller.getById)
router.get("/autor", controller.getAutor)
router.get("/:venda", controller.getQuadrosAVenda)
router.get("/:movimento", controller.getQuadrosPorMovimento)
router.post("/", controller.postQuadro)
router.delete("/:id", controller.deleteQuadro)
router.put("/:id", controller.putQuadro);

module.exports = router