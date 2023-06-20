const mongoose = require ('mongoose');
mongoose.set('strictQuery',false);
require("dotenv").config();

const connect = async () =>{
try {
    await mongoose.connect(process.env.MONGO_CNN);
        console.log('base de datos conectada trabaje tranquilo');
    } catch (error) {
        console.log('uff no se pudo conectar a la base de datos')
    }
}

module.exports = {connect}