var express = require('express');
var router = express.Router();


// LLamo el controlador para equipos 
var controlador_equipos = require("../controllers/equipos")

// llamo al controlador de sesion
const solo_admin = require('../roles/solo_admin')
const all_functions = require('../roles/all_functions')

/* Mostrar detalles de un Equipo*/



router.get('/detallar_equipo/:id_equipo', all_functions, async function(req, res) {

  const detalles = new controlador_equipos.Equipos()
  let result = await detalles.detalles_equipo(req.params.id_equipo)
  res.json(result)


});

// Mostrar todos los equipos
router.get('/mostrar_todos_equipos',all_functions, async function(req, res) {
  
     const nueva_vista = new controlador_equipos.Equipos()
  let resultado = await  nueva_vista.mostrar_todos()
  res.json(resultado)
  

});

// Agregar un nuevo equipo
router.post('/agregar_equipo', solo_admin, async  function(req,res) {

   const registrar = new controlador_equipos.Equipos()
  let resultado = await registrar.agregar(req.body)
    res.json(resultado) 
  
})


// Editar un equipo existente
router.put('/editar_equipo/:id_equipo', solo_admin, async function(req,res) {

  const editar = new controlador_equipos.Equipos()
  let obtenido = await editar.editar_equipo(req.params.id_equipo,req.body)

  if (obtenido == 0) {
       res.send("No se pudo actualizar. No existe ningun Equipo con ese Id")
  }else{
     res.send("Equipo editado correctamente")
  }
  
})

//Eliminar un equipo existente
router.delete('/eliminar_equipo/:id_equipo', solo_admin, async function(req,res) {
  const eliminar =  new controlador_equipos.Equipos()
  let mensaje = await  eliminar.borrar_equipo(req.params.id_equipo)
  
   if (mensaje == 0) {
     res.send("No se pudo eliminar... No existe ningun equipo con ese id")
   } else {
      res.send("Equipo eliminado correctamente")
   }
  
  
})

module.exports = router;
