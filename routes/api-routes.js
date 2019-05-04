const axios = require("axios");
const router = require("express").Router();

router.get("/results", (req, res) => {
  axios
    .get("https://openapi.etsy.com/v2/listings/active", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
