const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mi App en Heroku</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body class="bg-light d-flex flex-column min-vh-100">

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center" href="#">
                    <span class="fs-4">Proyecto Hroku</span>
                </a>
            </div>
        </nav>

        <main class="container my-auto">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 text-center">
                    <div class="card shadow-lg border-0 rounded-4 p-5 bg-white">
                        <div class="mb-4">
                            <span class="display-1 text-success">Funcionando!</span>
                        </div>
                        <h1 class="fw-bold text-dark mb-3">¡Despliegue Exitoso!</h1>
                        <p class="text-muted fs-5 mb-4">
                            Esta aplicación web ha sido desarrollada con <strong class="text-primary">Node.js</strong> y estilizada elegantemente con <strong class="text-purple" style="color: #6f42c1;">Bootstrap 5</strong>.
                        </p>
                        <hr class="my-4 text-muted">
                        <div class="d-grid gap-2">
                            <a href="https://getbootstrap.com" target="_blank" class="btn btn-primary btn-lg rounded-pill shadow-sm">
                                Leer documentación de Bootstrap
                            </a>
                            <button onclick="celebrar()" class="btn btn-outline-success btn-lg rounded-pill">
                                ¡Pulsar para pasar el semestre!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer class="bg-dark text-white-50 text-center py-3 mt-auto">
            <div class="container">
                <small>&copy; 2026 Mi Proyecto Heroku. Servidor en vivo.</small>
                <small>Jair Orozco Dominguez</small>
                <small>Actividad 2.3. Ephemeral enviroments</small>
            </div>
        </footer>

        <script>
            function celebrar() {
                alert('¡Felicidades! Pasaste el semestre');
            }
        </script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto ${PORT}`);
});
