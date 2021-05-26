//activamos el modulo que utiliza en el fondo el http de nodejs
const express = require('express');

//vamos a ejecutar express, que nos retorna el servidor
const servidor = express(); 

//listener de peticiones get. Cuando se reciba una al directorio raíz hacemos lo que indica la funcion
servidor.get('/', (request, response) =>{
    //respondo con un mensaje de vuelta
    response.send('Hola Mundo, primer intento de Nodejs con Express :)');
});


/*Enrutamiento: creación de subdirectorios en el servidor. Siempre antes de poner en marcha el server con .listen()*/

servidor.get('/about', (request, response) =>{
    response.send('Informacion sobre el servidor');
});

servidor.get('/test', (request, response) =>{
    response.send('<h1>TEST</h1>');
});


//Ponemos en marcha a escuchar el server
servidor.listen(5000, () => {
    console.log('Servidor escuchando en el puerto 5000');
});


