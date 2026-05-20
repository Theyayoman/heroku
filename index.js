const express = require("express");
const app = express();

// Heroku asigna dinámicamente un puerto mediante la variable de entorno PROCESS.ENV.PORT
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("¡Hola Mundo! Mi app está viva y desplegada en Heroku");
});

app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto ${PORT}`);
});
