const {equipo} = require("../models/equipos");

class ApiController {
    
    async verListado(req, res){
        const equipos = await equipo.find()
        res.status(200).json(equipos)
    }
    async buscarId(req, res){
        const equipos = await equipo.findById(req.params.id)
        res.status(200).json(equipos)
        }
    async verEquipo(req, res){
        const equipos= await equipo.findOne({nombre: req.params.nombre})
        res.status(200).json(equipos)
        }
    async crear(req, res){
        try {
            const equipoGuardado = new equipo(req.body)
            await equipoGuardado.save()
            res.status(201).json(equipoGuardado)
        } catch (error) {
                res.status(400).json(error)
        }
    }
    async editar (req, res){
        try {
            await equipo.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({
                Mensaje: "equipo" + req.params.id + "actualizado"
            })
        } catch (error) {
            res.status(400).json(error)
        }
}
async borrar (req, res){
    await equipo.findByIdAndDelete(req.params.id)
    res.status(201).json({
        Mensaje: "el equipo" + req.params.id + " fue eliminado"
    })
}
}

module.exports = new ApiController