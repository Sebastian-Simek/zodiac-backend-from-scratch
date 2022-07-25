const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs');
const router = Router();

router
  .get('/', (req, res) => {
    res.json(zodiacs);
  })
  .get('/:id', (req, res) => {
    const zodiac = zodiacs.find((zodiac) => zodiac.id === req.params.id);
    res.json(zodiac);
  });

module.exports = router;
