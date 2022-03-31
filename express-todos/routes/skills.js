var express = require("express");
var router = express.Router();
const skillsController = require("../controllers/skills");

//localHost 3000/mySkills
router.get("/", skillsController.index);

router.get("/new", skillsController.new);

router.get("/:id", skillsController.show);

router.get("/:id/edit", skillsController.edit);

router.post("/", skillsController.create);

router.delete("/:id", skillsController.delete);

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
