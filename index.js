//activamos el modulo que utiliza en el fondo el http de nodejs
const express = require('express');

//vamos a ejecutar express, que nos retorna el servidor
const servidor = express(); 

//listener de peticiones get. Cuando se reciba una al directorio raíz hacemos lo que indica la funcion
servidor.get('/', (request, response) =>{
    //respondo con un mensaje de vuelta
    response.send('Hola Mundo, primer intento de Nodejs con Express :)');
});

//Ponemos en marcha a escuchar el server
servidor.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});