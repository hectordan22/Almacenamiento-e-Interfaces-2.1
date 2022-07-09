var express = require('express');
var router = express.Router();

const bycript = require('bcryptjs');
//LLamo el controlador para los usuarios
var controlador_users = require("../controllers/usuarios")
//llamo a funcion para registrar sesion 

const solo_admin = require('../roles/solo_admin')
const all_functions = require('../roles/all_functions')

const info_user = require("../controllers/sesion")


// Ruta para Registrar un Usuario
router.post('/agregar_usuario',solo_admin, async (req, res) => {
    const usuarios = new controlador_users.Usuarios()
    let resultado = await usuarios.Registrar_usuario(req.body)
    res.json(resultado)
})



router.post('/iniciar-sesion', async (req, res) => {
    const usuarios = new controlador_users.Usuarios()
    let resultado = await usuarios.iniciar_sesion(req.body)

    if (resultado.length != 0) {
        const iguales = bycript.compareSync(req.body.password, resultado[0].password)

        if (iguales) {

            const user = {
                "email": resultado[0].email,
                "password": resultado[0].password,
                "tipo": resultado[0].tipo
            }

            info_user(user)
            res.send("Bienvenido" + JSON.stringify(resultado[0].username))
        }else{
            res.send("El correo o la contraseña que indicaste no se encuentran Registrados")
        }


    } else {
        res.send("El correo o la contraseña que indicaste no se encuentran Registrados")
    }

})

router.get('/cerrar-sesion', all_functions, (req, res) => {
    const usuarios = new controlador_users.Usuarios()
    let resultado = usuarios.cerrar_sesion()
    res.json(resultado)
})

module.exports = router;
