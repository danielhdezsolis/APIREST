const express = require('express');
const dbconnect = require('./config');
const ModelUser = require('./userModel');

const app = express();
const router = express.Router();

// Método GET para obtener todas las carreras (solo idCarrera y Nombre)
router.get("/", async (req, res) => {
    try {
        const carreras = await ModelUser.find({}, { idCarrera: 1, Nombre: 1 });
        res.send(carreras);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Método GET para obtener carreras por idCarrera (idCarrera, Nombre y Especialidad)
router.get("/:idCarrera", async (req, res) => {
    try {
        const id = req.params.idCarrera;
        const carreras = await ModelUser.find({ idCarrera: id }, { idCarrera: 1, Nombre: 1, Especialidad: 1 });
        res.send(carreras);
    } catch (error) {
        res.status(400).send(error);
    }
});


// Método GET para obtener carreras por Especialidad (idCarrera, Nombre, Especialidad y Materias)
router.get("/:idCarrera/:Especialidad", async (req, res) => {
    try {
        const id = req.params.idCarrera;
        const especialidad = req.params.Especialidad;
        const carreras = await ModelUser.find({ idCarrera: id, Especialidad: especialidad }, { idCarrera: 1, Nombre: 1, Especialidad: 1, Materias: 1 });
        res.send(carreras);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.post("/", async (req,res)=>{
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
})

// Método PUT para actualizar una carrera por idCarrera y Especialidad
router.put("/:idCarrera/:Especialidad", async (req, res) => {
    try {
        const id = req.params.idCarrera;
        const especialidad = req.params.Especialidad;
        const newData = req.body; // Datos a actualizar
        const updatedData = await ModelUser.updateMany({ idCarrera: id, Especialidad: especialidad }, newData);
        res.send(updatedData);
    } catch (error) {
        console.error("Error al actualizar el elemento:", error);
        res.status(500).send("Error interno del servidor");
    }
});



// Método DELETE para eliminar carreras por idCarrera y Especialidad
router.delete("/:idCarrera/:Especialidad", async (req, res) => {
    try {
        const id = req.params.idCarrera;
        const especialidad = req.params.Especialidad;
        const deleteResult = await ModelUser.deleteMany({ idCarrera: id, Especialidad: especialidad });
        res.send(deleteResult);
    } catch (error) {
        console.error("Error al eliminar el elemento:", error);
        res.status(500).send("Error interno del servidor");
    }
});

app.use(express.json())
app.use(router)
app.listen(3000, () => {
    console.log("El servidor esta en el puerto 3001");
})

dbconnect();
