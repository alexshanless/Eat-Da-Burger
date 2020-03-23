let express = require('express');
let router = express.Router();

let burger = require('../models/burger.js');
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post('/api/burgers', function (req, res) {

    burger.create(req.body.burger_name, function (result) {
        console.log(result);

        res.redirect('/');
    })
})

router.put('/api/burgers/:id', function (req, res) {
    let condition = "id = " + req.params.id;

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;