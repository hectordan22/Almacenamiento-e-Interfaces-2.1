// requiero el modulo 
const Sequelize = require('sequelize');

// Ahora voy a conectar 

// Me traigo aca el modelo equipo para poder acceder a su codigo y utilizarlo
const equipoModel = require('../models/equipos')
const usersModel = require('../models/users')
const trabajosModel = require('../models/trabajos')
// el orden de parametros es : nombre bd, nombre usuario,password,en un objeto{host y dialecto : dialecto es el tipo de bd que estamos usando}
const conexion = new Sequelize('sistema-simao','root','',{
    host:'localhost',
    dialect:'mysql'
});

// Aca una vez accedido al modelo como lo que exporta es una funcion creadora de tabla 
// pues yo le paso sus parametros

// el primer parametro es la conexion y el segundo es la propia libreria Sequelize en si
// y lo que retorna lo guardo en una constante llamada Equipo
const Equipo = equipoModel(conexion,Sequelize);
const User = usersModel(conexion,Sequelize);
const Trabajo = trabajosModel(conexion,Sequelize);

conexion.sync({force:false})
.then(()=>{
    console.log("Tablas sincronizadas")
})

// Exporto a EquipoModel 

module.exports = {
    Equipo,
    User,
    Trabajo
}

