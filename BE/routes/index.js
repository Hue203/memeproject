const express = require("express");
const router = express.Router();

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   // res.json({ status: "ok", data: "Hello World!" });
//   //trial.../why.jason//why send
//   res.send({ status: "ok", data: "Hello World!" });
// });
//default api
router.get("/", function (req, res, next) {
  res.json({ status: "ok", data: "Get Hompages" });
});
// All route of Meme
const memeAPI = require("./meme.api");
router.use("/memes", memeAPI);

module.exports = router;
