const {User} = require('../db/db');
// requiero libreria para encriptar passwords
const bycript = require('bcryptjs');
const fs = require("fs")


class Usuarios {
  
  Registrar_usuario(cuerpo) {
      cuerpo.password = bycript.hashSync(cuerpo.password,10);
      const user = User.create(cuerpo)
      return user
  }

  iniciar_sesion(datos){
     
     const result =  User.findAll({
        where: {
          email: datos.email,
         
        }
      });

      return result
    
  }

  cerrar_sesion(){
    fs.writeFileSync('controllers/sesiones.json', "", 'utf-8');
    return "Logout: Se ha cerrado la session"
  }

 
}

module.exports.Usuarios = Usuarios