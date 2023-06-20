const {Schema, model} = require("mongoose");

const schema = new Schema({
    nombre:{
        type: String,
        require: true,
        unique: true
    },
    alias:{
        type: String,
    },
    ciudad:{
        type: String,
        require: true
    },
    estadio:{
        type: String,
        require: true
    },
})

const equipo = model("equipo", schema);
module.exports = {equipo}