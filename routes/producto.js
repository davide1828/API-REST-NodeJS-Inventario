const { Router } = require('express');

const router = Router();

const productos = [
    {
        "id": 1, 
        "nombre": "yuca", 
        "precio": "20000", 
        categoria: {
            "id": 1
        }, 
        "otro": ["1", "2"]
    },
    {
        "id": 2, 
        "nombre": "papa", 
        "precio": "30000", 
        categoria: {
            "id": 1
        }, 
        "otro": []
    }
];
// consulta todos los productos
router.get('/', (req, res) => {
    const response = productos;
    res.json(response);
});
// consultar un producto por id
router.get('/:id/producto', (req, res) => {
    const id = req.params.id;
    const response = productos.filter(p => p.id == id);
    res.json(response[0]);
});

router.post('/', (req, res) => {
    // code here
});

module.exports = router;