
const fs = require('fs');
const colors = require('colors')
const CrearArchivo = async (base = 5, listar=false, hasta=10)=>{
    try {
        if(listar){
        console.log('==================='.blue)
        console.log(  'TABLA DEL'.rainbow,colors.red(base))
        console.log('==================='.blue)
        }
            
        let salida='';
        let consola='';
        for (let i = 0; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${base*i}\n`);
            consola += (`${base} ${'x'.red} ${i} ${'='.red} ${base*i}\n`);
            
        }
            if(listar){
            console.log(consola)
            }

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

            return (`La Tabla-${base}.txt`)
    
                } catch (err) {
                    throw err;
        
    }
}


module.exports = {
    CrearArchivo 
}
