var os=require('os');
console.log('El directorio temporal es :'+os.tmpdir());
console.log('Memoria total:'+os.totalmem()+' bytes');
console.log('Memoria libre:'+os.freemem()+' bytes');