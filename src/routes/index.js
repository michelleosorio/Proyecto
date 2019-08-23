const router = require('express').Router();

//routes
router.get('/', (req, res) => res.send('Proyecto!'));
module.exports = router;