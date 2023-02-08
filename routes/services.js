const express = require('express');
const router = express.Router();

router.route('/flex').get(async(req,res)=>{
    res.render('services/flex')
})
router.route('/cardio').get(async(req,res)=>{
    res.render('services/cardio')
})
router.route('/yoga').get(async(req,res)=>{
    res.render('services/yoga')
})
router.route('/weight').get(async(req,res)=>{
    res.render('services/weight')
})

module.exports = router;