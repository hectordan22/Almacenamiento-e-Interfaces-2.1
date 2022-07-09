module.exports = (conexion, type)=>{
    return conexion.define('trabajos',{
        id:{
            type : type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_equipo: type.INTEGER,
        fecha_planificada: type.STRING,
        fecha_inicio_mantenimiento: type.STRING,
        fecha_final_mantenimiento: type.STRING,
        status: type.STRING,
        tipo: type.STRING,
        
    })
}