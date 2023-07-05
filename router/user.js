var router = require("express").Router();
var controller = require("../controller/userController");
const { User } = require("../Model/user");

router.get("/", controller.index);

router.get("/signIn", controller.signIn);

router.get("/signUp", controller.signUp);

router.get("/order", controller.order);

router.get("/cart", controller.cart);

module.exports = router;
