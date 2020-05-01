const express = require('express');
const router = express.Router();

router.get('/:zipcode', async (req, res, next) => {
  const zipcode = req.params.zipcode.replace(/\D+/g, '');

  res.status(200).json(`seu CEP é: ${zipcode} e o frete custa R$ 10,00`);
});

module.exports = router;
