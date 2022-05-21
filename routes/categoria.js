
const { Router } = require('express');

const router = Router();

const categorias = [
    {"id": 1, "nombre": "agricolas", "descripcion": "productos del campo"},
    {"id": 2, "nombre": "enlatados", "descripcion": "atun, sardinas, etc."}
];
// consulta todos las categorías
router.get('/', (req, res) => {
    const response = categorias;
    res.json(response);
});

module.exports = router;
