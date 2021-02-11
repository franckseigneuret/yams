var express = require('express');
var router = express.Router();
const gridModel = require('../models/grille')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// enregistrer scores une nouvelle grille
router.post('/grid', async function (req, res, next) {
  let message

  // connaitre le num° de la dernière partie
  const lastPartGrid = await gridModel.find().sort( { partie: -1 } ).limit(1);
  // l'incrémenter
  const i = lastPartGrid[0].partie + 1

  // pour enregistrer la nouvelle partie
  const addGrid = new gridModel({
    partie: i,
    as: req.body.as,
    deux: req.body.deux,
    trois: req.body.trois,
    quatre: req.body.quatre,
    cinq: req.body.cinq,
    six: req.body.six,
    suite: req.body.suite,
    full: req.body.full,
    carre: req.body.carre,
    yam: req.body.yam,
    min: req.body.min,
    max: req.body.max,
    total2: req.body.total2,
  });

  const newPart = await addGrid.save()

  // console.log(newPart)
  if(newPart.partie === i) {
    message = ' La partie ' + newPart.partie + ' a été enregistrée'
  } else {
    message = 'erreur d\'enregistrement nouvelle partie'
  }

  res.json({ message });
});

// maj scores d'une partie
router.post('/grid/:partie', async function (req, res, next) {

  const updatePart = await gridModel.updateOne(
    { partie: req.params.partie },
    {
      as: req.body.as,
      deux: req.body.deux,
      trois: req.body.trois,
      quatre: req.body.quatre,
      cinq: req.body.cinq,
      six: req.body.six,
      suite: req.body.suite,
      full: req.body.full,
      carre: req.body.carre,
      yam: req.body.yam,
      min: req.body.min,
      max: req.body.max,
      total2: req.body.total2,
    }
  )

  let message = ''
  // console.log(updatePart)
  if(updatePart.n === 1) {
    message = ' La partie ' + req.params.partie + ' a été mise à jour'
    if(updatePart.nModified === 1) {
      message += ' et modifiée'
    } else if(updatePart.nModified === 0) {
      message += ' mais sans être modifiée'
    } else {
      message += 'updatePart.nModified = ' + updatePart.nModified
    }
  } else {
    message = 'erreur d\'enregistrement'
  }

  res.json({ message });
})

module.exports = router;
