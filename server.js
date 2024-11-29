const express = require('express');
const sequelize = require('./src/config/database');
const userRoutes = require('./src/routes/userRoutes');
const port = 9876;

const app = express();
app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

sequelize.authenticate()
.then(() => {
    console.log(`Conexión exitosa a la base de datos`);
})
.catch((error) => {
    console.error(`Error al conectar a la base de datos: ${error}`);
});

app.use('/api', userRoutes);