const {Equipo} = require('../db/db');



class Equipos {
  
  detalles_equipo(id_unico) {
     const result = Equipo.findAll({ where: {
      id:id_unico}
    })
    return result
  }

  mostrar_todos() {

       var results = Equipo.findAll()
         return results
      
    }

   agregar(equipo) {

         var nuevo =  Equipo.create(equipo)
         return nuevo
  }

  editar_equipo(id_solicitado, cuerpo) {
     const consulta = Equipo.update(cuerpo,{
        where: {id:id_solicitado}
      }) 
      return consulta
  }

  borrar_equipo(id_del_equipo) {
     const consulta = Equipo.destroy({
        where:{id:id_del_equipo}
      })
      return consulta
  }
}

module.exports.Equipos = Equipos