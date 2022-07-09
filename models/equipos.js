
// Este Modelo es para la tabla de equipos

// exporto una funcion para poder usarla desde db.js y asi generar la tabla sql, si la tabla existe 
// pues no la genera pero si no existe obviamente si la crea

module.exports = (conexion, type)=>{
    return conexion.define('equipos',{
        id:{
            type : type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        descripcion: type.STRING,
        serial: type.STRING,
        puesta_en_marcha: type.STRING,
        ultima_puesta_en_marcha: type.STRING,
        ultima_fecha_mantenimiento: type.STRING,
        id_ultimo_mantenimiento: type.INTEGER,


    })
}

