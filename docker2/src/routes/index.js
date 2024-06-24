const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => res.json({mesaage: 'hello world'}));

module.exports = router