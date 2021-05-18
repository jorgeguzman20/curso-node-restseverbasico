const { Router } = require('express');

const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch  } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);
router.post('/', usuariosPost);
router.patch('/', usuariosPatch);
router.put('/:id', usuariosPut);

router.delete('/',usuariosDelete);


module.exports = router;