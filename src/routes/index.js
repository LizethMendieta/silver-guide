const express = require('express');
const router = express.Router();
const model = require('../modelos/valores')();

const Valor = require('../modelos/valores');

router.get('/', async(req, res) => {
    //res.send('lizeth')
    const val = await Valor.find();
    console.log(val);
    //res.json(val);
    res.render('index2.ejs', {
        val
    });
});
router.post('/add', async(req, res) => {
    //res.send('lizeth')
    const valor = new Valor(req.body);
    await valor.save();

    res.render('index2.ejs', { val });
    // res.redirect('/');
    //res.json(req.body);
});

module.exports = router;