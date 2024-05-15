const mongoose = require('mongoose');

const dbconnect = async () => {
    try {
        mongoose.set('strictQuery', true);
        //Para exportarlo a docker "mongodb://mongo/APIREST"utilice esta ruta de mongoDB, 
        //pero en localhost deberia ser la ruta de mi base de datos
        //mongodb://localhost:27017/APIREST
        await mongoose.connect("mongodb://mongo/APIREST", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conexión establecida con la Base de Datos");
    } catch (error) {
        console.error("No se pudo establecer la conexión con la Base de Datos:", error);
    }
};

module.exports = dbconnect;
