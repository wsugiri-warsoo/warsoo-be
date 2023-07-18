const router = require('express').Router();

router.get('/', (req, res) => res.send('-- landing --'));
router.get('/about', (req, res) => res.send('-- about --'));
router.get('/login', (req, res) => res.send('-- login --'));

module.exports = router;