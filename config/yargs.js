const argv = require('yargs')
            .option('b',{
            alias: 'base',
            type:'number',
            demandOption: true,
            describe:'Es la base de la tabla de multiplicar'      
            })

            .option('h',{
                alias: 'hasta',
                type:'number',
                default:10,
                describe:'Es el número hasta dond quieres la tabla de multiplicar'      
                })
                     
            .option('l',{
             alias:'listar',
             type:'boolean',
             default: false,
             describe:'Muestra la tabla de multiplicar en consola'
                        
            })

                .check((argv,options)=>{
                        if (isNaN(argv.b)) {
                            throw 'la base tiene que ser un número'
                        }
                        return true

                    })
                    .argv;


                    module.exports = argv;