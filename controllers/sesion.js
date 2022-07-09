module.exports = (datos_sesion)=>{
    const fs = require("fs")


    const json_equipos = JSON.stringify(datos_sesion);
      fs.writeFileSync('controllers/sesiones.json', json_equipos, 'utf-8');

     
}