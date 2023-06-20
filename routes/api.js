const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController")
const {validarId} = require("../middlewares/validarId")
const checks = require("../middlewares/checksSchema")
const {validarChecks} = require("../middlewares/validarChecks")


router.get("/ver", apiController.verListado)
router.get("/buscar/nombre/:nombre", apiController.verEquipo)
router.get("/buscar/id/:id",validarId, apiController.buscarId)
router.post("/crear",checks,validarChecks,apiController.crear)
router.put("/editar/:id",validarId,checks, validarChecks, apiController.editar)
router.delete("/borrar/:id" , validarId, apiController.borrar)

module.exports = router