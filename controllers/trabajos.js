const {Trabajo} = require('../db/db');

class Trabajos {
    
    mostrar_preventivos() {
        const result = Trabajo.findAll({ where: {
            tipo:'preventivos'}
          })
          return result
    }

     mostrar_correctivos() {
        const result = Trabajo.findAll({ where: {
            tipo:'correctivo'}
          })
          return result
    }

    
    mostrar_todos() {
        var results = Trabajo.findAll()
         return results

    }

    agregar_trabajo(trabajo) {
        var nuevo =  Trabajo.create(trabajo)
        return nuevo

    }

    editar_trabajo(id_solicitado, cuerpo) {
        Trabajo.update(cuerpo,{
            where: {id:id_solicitado}
          }) 
          return "Se actualizo correctamente"
    }

    borrar_trabajo(id_del_trabajo) {
        Trabajo.destroy({
            where:{id:id_del_trabajo}
          })
          return "Se ha Eliminado el Trabajo"
    }
}

module.exports.Trabajos = Trabajos