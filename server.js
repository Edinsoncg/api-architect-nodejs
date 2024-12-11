const express = require('express');
const sequelize = require('./src/infraestructure/database/connection');
const sneakerRoutes = require('./src/interfaceAdapters/routes/sneakerRoutes');

const app = express();
const port = 9876;

app.use(express.json());
app.use('/api/sneaker', sneakerRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexión exitosa a la base de datos');
        sequelize.sync();
    })
    .catch((error) => console.error('Error al conectar a la base de datos:', error));
