var all_functions = (req, res, next) => {

    const fs = require("fs")

    const json_equi = fs.readFileSync('controllers/sesiones.json', 'utf-8');

    if (json_equi != "") {
        let equip = JSON.parse(json_equi);

        if (equip.tipo == "admin" || equip.tipo == "personal") {
            return next();

        }
    } else {
        return res.json("Debe iniciar sesion para usar cualquier ruta");
    }

};

module.exports = all_functions