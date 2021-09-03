var http = require('http');
var fs=require('fs');

var servidor=http.createServer(function(pedido,respuesta){ 

    fs.writeFile('./archivo_mostrar.txt',function(error,data){     
        if (error)         
            respuesta.end(error);     
        else         
            respuesta.end(data); 
    });
});

servidor.listen(8888); 
 
console.log('Servidor web iniciado');