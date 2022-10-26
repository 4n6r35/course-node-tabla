const {CrearArchivo} = require ('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
                   
console.clear()

//console.log(process.argv)
//console.log(argv)
//console.log('base: yargs', argv.base)
////////////////////////////////////////////////////////////////
//const base = 2

//const[ , ,arg3='base=5'] = process.argv;
//const[, base = 5 ]=arg3.split('=');
//console.log(base);


CrearArchivo(argv.base, argv.listar,argv.hasta)
.then(nombreArchivo=>console.log(nombreArchivo.green,'Creado exitosamente'.green))
.catch(error=>console.log(error))