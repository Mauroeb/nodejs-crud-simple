    const {equipo} = require("../models/equipos")
    
    const validarId = async (req,res,next) => {
        const buscar = await equipo.findById(req.params.id)
        if(buscar !== null){
            next()
    }else {
        res.status(500).json({
            message: "id" + req.params.id + "inválido"
        })
    }
}
module.exports = {validarId}

