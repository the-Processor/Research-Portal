const express = require('express');
const AdminQuery = require('../models/admin-query');

const router = express.Router();

router.get('', (req, res, next) => {
  AdminQuery.find()
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
  const query = new AdminQuery({
    adminEmail : req.body.email,
    date : req.body.date,
    subject : req.body.subject,
    content: req.body.content
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

// router.put('/:id', (req, res, next) => {
//   Query.findByIdAndUpdate(
//     { _id : req.params._id },
//     {
//       studEmail : req.body.email,
//       date : req.body.date,
//       subject : req.body.subject,
//       content: req.body.content
//     },
//     { new : true },
//     (err, response) => {
//       if(err){
//         res.status(500).json({
//           error: err
//         });
//       }else{
//         res.status(201).json({
//           message: "Query Updated!",
//           data: response
//         });
//       }
//     }
//   );
// });

router.delete('/:id', (req, res, next) => {
  AdminQuery.deleteOne({ _id : req.params.id })
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

