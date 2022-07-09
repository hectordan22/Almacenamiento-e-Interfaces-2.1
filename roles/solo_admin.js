
var solo_admin = (req, res, next) => {

  const fs = require("fs")

  const json_equi = fs.readFileSync('controllers/sesiones.json', 'utf-8');
 
  if (json_equi !="") {
    let equip = JSON.parse(json_equi);

        if (equip.tipo =="admin") {
           return next();
        }else{
          return res.json("Denegado: el acceso a esta ruta es solo para administradores");
        }
    }else{
      return res.json("Denegado: para usar cualquier ruta debe iniciar sesion")
    }
   
  };

module.exports = solo_admin



