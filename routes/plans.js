const express = require('express');
const router = express.Router();

router.route('/basic').get(async(req,res)=>{
    res.render('plans/basic')
})
router.route('/premium').get(async(req,res)=>{
    res.render('plans/premium')
})
router.route('/diamond').get(async(req,res)=>{
    res.render('plans/diamond')
})

module.exports = router;