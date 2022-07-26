const fetch = require('cross-fetch');
const { Router } = require('express');

const router = Router();


async function awaitFetch(sign) {
  const res = await fetch(`http://ohmanda.com/api/horoscope/${sign}`);
  const json = await res.json();
  return json;
}


router
  .get('/:sign', async (req, res) => {
    const singleZodiac = await awaitFetch(req.params.sign);
    console.log(singleZodiac);
    res.json(singleZodiac);
  });
module.exports = router;
