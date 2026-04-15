const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Crear carpeta logs si no existe
if (!fs.existsSync("./logs")) {
    fs.mkdirSync("./logs");
}

// Función de logs
function log(message) {
    const time = new Date().toISOString();
    fs.appendFileSync("./logs/app.log", `[${time}] ${message}\n`);
}

// Conexión a Mongo (luego Docker lo hará funcionar)
mongoose.connect("mongodb://mongo:27017/bitacora")
.then(() => console.log("Mongo conectado"))
.catch(err => console.log("Error Mongo:", err));

const Query = mongoose.model("Query", {
    text: String,
    date: { type: Date, default: Date.now }
});

// POST
app.post("/query", async (req, res) => {
    try {
        const newQuery = new Query({ text: req.body.text });
        await newQuery.save();

        log("INFO: Nueva consulta guardada");

        res.json({ message: "Guardado" });
    } catch (err) {
        log("ERROR: Fallo al guardar");
        res.status(500).json({ error: "Error" });
    }
});

// GET
app.get("/queries", async (req, res) => {
    const data = await Query.find();
    res.json(data);
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});