const express = require('express');
const Notice = require('../models/notice');
const router = express.Router();

router.get('/:type', (req, res, next) => {
  Notice.find({ type: req.params.type }).then(
    notices => {
      res.status(200).json({
        message: "success",
        data: notices
      })
    }
  )
});

router.post('', (req, res, next) => {
  const notice = new Notice(
    {
      date: req.body.date,
      type: req.body.type,
      heading: req.body.heading,
      content: req.body.content
    }
  );
  notice.save()
  .then(postedNotice => {
    res.status(201).json({
      message: "Notice Posted!",
      data: postedNotice
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

// router.put('/:id', (req, res, next) => {
//   Notice.findByIdAndUpdate(
//     { _id : req.params.id},
//     {
//       date: req.body.date,
//       content : req.body.content
//     },
//     {new : true},
//     (err, response) => {
//       if(err){
//         res.status(500).json({
//           error: err
//         })
//       }
//       else{
//         res.status(201).json({
//           message: "Updated Successfully",
//           data: response
//         })
//       }
//     });
// });

router.delete('/:id', (req, res, next) => {
  Notice.deleteOne({ _id : req.params.id })
  .then(result => {
    res.status(200).json({
      message: "Notice Deleted!",
      data: result
    });
  })
  .catch(err => {
    res.status(400).json({
      error: err
    });
  })
})



module.exports = router;
