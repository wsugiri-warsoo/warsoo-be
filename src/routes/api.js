const router = require('express').Router();

router.get('/v1', (req, res) => res.send({ message: 'api version 1' }));

module.exports = router;