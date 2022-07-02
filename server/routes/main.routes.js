const Router = require('express');
const router = new Router();
const mainController = require(
    '../controller/main.controller'
)

router.get('/table', mainController.getTable)

module.exports = router  