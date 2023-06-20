const {check} = require("express-validator")

const checks = [
    check("nombre")
        .notEmpty().withMessage("el nombre es obligatorio")
        .isString("solo está permitido contener letras"),
    check("alias")
        .notEmpty().withMessage("el alias es obligatorio")
        .isString("solo está permitido contener letras"),
    check("ciudad")
        .notEmpty().withMessage("la ciudad es obligatorio")
        .isString("solo está permitido contener letras"),
    check("estadio")
        .notEmpty().withMessage("el estadio es obligatorio")
        .isString("solo está permitido contener letras"),
]

module.exports = checks