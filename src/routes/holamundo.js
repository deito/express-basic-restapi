const { Router } = require('express');
const router = new Router();

router.get('/', (req, res) => {
    res.json("Hola Mundo !! :D");
});

module.exports = router;