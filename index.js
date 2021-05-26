//activamos el modulo que utiliza en el fondo el http de nodejs
const express = require('express');



//vamos a ejecutar express, que nos retorna el servidor
const servidor = express(); 


//Cabecera para entender los json que me llegan al servidor
servidor.use(express.json());



//listener genérico independiente del tipo de método que se use en la peticion
servidor.all('/', (request, response, next) =>{

    console.log("BIENVENIDO A MI SERVIDOR, VENGAS DE DONDE VENGAS");
    //al colocar el next permito a la ejecución seguir hacia abajo según el modelo de la máquina Von Newman
    next();     

    //De colocar en vez de next() un response.send('CualquierCosa'); no dejaria serguir, responderia a la peticion y terminaría

});




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

servidor.get('/retornarDatos', (request, response) =>{
    //especificamos que vamos a mandar un objeto de javascript como respuesta (formado por pares clave-valor)
    response.json({
        ususario: 'Rechon',
        apellido: 'Cuadrillero'
    });
});


/*Métodos HTTP: POST PUT DELETE*/

servidor.post('/', (request, response) =>{
    //Sirven para recibir datos, guardarlos y después devolver una respuesta, pero la info viaja en el cuerpo
    response.send('Se ha recibido una petición POST');
});

servidor.post('/enviarUsuario', (request, response) =>{
    //recibo datos que me envía la aplicacion (están en request body)
    datos = request.body; 
    console.log(datos);

    //Express per se, no entiende los JSON entonces hay que añadir la cabecera 
    //servidor.use(express.json());
    
});

servidor.post('/enviarIDURL/:id', (request, response) =>{
    //Con :id defino una ruta dinamica que tiene una variable en la que se va a capturar precisamente lo que venga
    capturoObjetoDeLaURL = request.params
    capturoID = request.params.id
    console.log("OBJETO" + capturoObjetoDeLaURL);
    console.log("ID SOLO" + capturoObjetoDeLaURL);

    //despues de hacer lo que quiera, contesto de vuelta e inserto el valor de la variable recibida
    response.send(`Id de ususario ${capturoID} recibida, Muchas Gracias.`);

});




servidor.put('/', (request, response) =>{
    //Sirve para coger los datos que me da el frontEnd 
    response.send('Se ha recibido una petición PUT');
});




servidor.delete('/', (request, response) =>{
    //Eliminar un dato dentro del server y devolver una respuesta
    response.send('Se ha recibido una petición DELETE');
});





//Ponemos en marcha a escuchar el server
servidor.listen(5000, () => {
    console.log('Servidor escuchando en el puerto 5000');
});


