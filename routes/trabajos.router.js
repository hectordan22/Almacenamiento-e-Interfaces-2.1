var express = require('express');
var router = express.Router();

// LLamo el controlador para los trabajos
var controlador_trabajos = require("../controllers/trabajos")

const solo_admin = require('../roles/solo_admin')
const all_functions = require('../roles/all_functions')


// Ruta para mostrar todos los trabajos
router.get("/mostrar_todos_trabajos", all_functions, async function (req, res) {
    const nueva_vista = new controlador_trabajos.Trabajos()
    let respuesta =  await nueva_vista.mostrar_todos()
    res.json(respuesta)
    
})


// Ruta para mostrar los tipos de trabajos  preventivos
router.get("/trabajos_preventivos",all_functions, async  function (req, res) {
    const nuevo_preventivo = new controlador_trabajos.Trabajos()
    let respuesta = await  nuevo_preventivo.mostrar_preventivos()
    res.json(respuesta)
})


// Ruta para mostrar los tipos de trabajos correctivos
router.get("/trabajos_correctivos",all_functions, async function (req, res) {
    const nuevo_correctivo = new controlador_trabajos.Trabajos()
    
    let respuesta = await nuevo_correctivo.mostrar_correctivos()
    res.json(respuesta)
   
})

// Agregar un nuevo trabajo
router.post('/registrar_trabajo', solo_admin, async function (req, res) {
    const registrar = new controlador_trabajos.Trabajos()
    let resultado = await registrar.agregar_trabajo(req.body)

    res.json(resultado)
})


// Editar un Trabajo existente
router.put('/editar_trabajo/:id_trabajo',solo_admin, async function (req, res) {
    const editar = new controlador_trabajos.Trabajos()
    let obtenido = await editar.editar_trabajo(req.params.id_trabajo,req.body)

    res.json(obtenido)

})

//Eliminar un equipo existente
router.delete('/eliminar_trabajo/:id_trabajo',solo_admin, async function (req, res) {
    const eliminar = new controlador_trabajos.Trabajos()
    let mensaje = await eliminar.borrar_trabajo(req.params.id_trabajo)

    res.json(mensaje)

})

module.exports = router;