const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ message: "Hooray, welcome to our API" });
});

router
  .route("/ping")
  .post((req, res, next) => {
    res.send("You post a PING");
  })
  .get((req, res, next) => {
    res.send("You get a ping");
  });

module.exports = router;
