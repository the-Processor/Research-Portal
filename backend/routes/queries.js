const express = require('express');
const mongoose = require('mongoose');
const Query = require('../models/query');

const router = express.Router();


// New queries

router.get('/new/:type', (req, res, next) => {
  Query.find({ type: req.params.type, response: {$exists: false} })
  .then(queries => {
    res.status(200).json({
      message: "Success",
      data: queries
    });
  })
  .catch(err => {
    res.status(404).json({
      error: err
    });
  });
});

// Replied Queries

router.get('/replied/:type', (req, res, next) => {
  Query.find({ type: req.params.type, response: {$exists: true} })
  .then(queries => {
    res.status(200).json({
      message: "Success",
      data: queries
    });
  })
  .catch(err => {
    res.status(404).json({
      error: err
    });
  });
});

router.post('', (req, res, next) => {
  const query = new Query({
    email : req.body.email,
    date : req.body.date,
    type : req.body.type,
    question : req.body.question,
    // content: req.body.content
  });
  query.save().then(postedData => {
    res.status(201).json({
      message: "Query Posted!",
      data: postedData
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

router.put('/:id', (req, res, next) => {
  Query.findByIdAndUpdate(
    { _id : req.params.id },
    {
      $set: {response: req.body.response}
    },
    { new : true },
    (err, response) => {
      if(err){
        res.status(500).json({
          error: err
        });
      }else{
        res.status(201).json({
          message: "Query Updated!",
          data: response
        });
      }
    }
  );
});

router.delete('/:id', (req, res, next) => {
  Query.deleteOne({ _id : req.params.id })
  .then(result => {
    res.status(200).json({
      message: "Deleted Successfully",
      data: result
    })
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
})



module.exports = router;

