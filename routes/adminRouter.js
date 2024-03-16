var express = require('express');
var router = express.Router();
const {
    addPublisher,
    viewPublishers,
    deletePublisher
    } = require("../controllers/adminController");

router.get('/dashboard', function(req, res, next) {
  res.render('adminDashboard')
});


router.get('/add-publisher', function(req, res, next) {
    res.render('addPublisher')
});


router.route('/view-publishers').get(viewPublishers);

router.route('/add-publisher').post(addPublisher);

router.route('/delete-publisher/:id').post(deletePublisher);

module.exports = router;
