const mongoose = require('mongoose')

const url = 'mongodb://localhost/pelicula'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifieldTopology: true,
    useFindAndModify: false,
    useCreateIndex: false,
})
    .then(() => console.log('CONECTADO CON MONGO'))
    .catch((e) => console.log('El error de conexion es: ' + 'e'))