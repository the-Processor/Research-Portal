const express = require('express');
const fs = require('fs');
const multer = require('multer');
const formidable = require('formidable');
const Paper = require('../models/paper');
const { compareSync } = require('bcrypt');
const router = express.Router();





// ==============================================================================

const MIME_TYPE_MAP = {
  'application/pdf': 'pdf',
  'application/msword' : 'doc',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document' : 'docx'
};

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
      console.log(file.mimetype)
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid MIME type");
    if(isValid){
      error = null
    }
    cb(error, './uploads');
  },
  filename: (req, file, cb) => {
    console.log(file)
    const name = req.body.email.split('@')[0];
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '_' + Date.now() + '.' + ext);
  }
});

const maxSize = 5 * 1024 * 1024;

const upload = multer({storage: multerStorage, limits: { fileSize: maxSize }});

// var upload = multer({
//     storage: storage,
//     limits: { fileSize: maxSize }
//   }).single('bestand');

// ==============================================================================





router.get('', (req, res, next) => {
    Paper.find().then(
        papers => {
            res.status(200).json({
                message: "Success",
                data: papers
            });
        }
    );
});

router.get('/new/:type', (req, res, next) => {
    Paper.find({ institute: req.params.institute })
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

router.post('', upload.single('file'), (req, res, next) => {

    console.log(req.body)
    // const form = new formidable.IncomingForm();
    // form.parse(req, (err, fields, files) => {
    //     var error = 0;
    //     var old_path = files.file.path;
    //     var new_path = 'uploads/' + files.file.name;
    //     // fs.rename(old_path, new_path, (err) => {
    //     //     if(err) throw err;
    //     //     res.status(201).json({
    //     //         message: "success"
    //     //     })
    //     // })
    //     fs.readFile(old_path, function (err, data) {
    //         if (err){
    //             error++;
    //             throw err;
    //         }
    //         console.log('File read!');

    //         // Write the file
    //         fs.writeFile(new_path, data, function (err) {
    //             if (err){
    //                 error++;
    //                 throw err;
    //             }
    //             res.write('File uploaded and moved!');
    //             res.end();
    //             console.log('File written!');
    //         });

    //         // Delete the file
    //         fs.unlink(old_path, function (err) {
    //             if (err){
    //                 error++;
    //                 throw err;
    //             }
    //             console.log('File deleted!');
    //         });
    //         if(error==0){
    //             console.log(req)
    //             console.log(req.body.keywords);
    const url = req.protocol + '://' + req.get('host');

    const paper = new Paper({
        title: req.body.title,
        keywords: req.body.keywords.split(','),
        areaOfResearch: req.body.areaOfResearch,
        author: {
            name: req.body.name,
            email: req.body.email,
            institute: req.body.institute,
            contact: req.body.contact
        },
        coAuthor1: {
            name1: req.body.name1,
            email1: req.body.email1,
            institute1: req.body.institute1,
            contact1: req.body.contact1
        },
        coAuthor2: {
            name2: req.body.name2,
            email2: req.body.email2,
            institute2: req.body.institute2,
            contact2: req.body.contact2
        },
        publisher: req.body.publisher,
        publicationDate: req.body.date,
        paperPath: url + '/uploads/' + req.file.filename,
        paperStatusCode: parseInt(req.body.status)
    });
    paper.save()
    .then(postedPaper => {
        res.status(201).json({
            message: "Paper added!",
            data: postedPaper
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
    //         }
    //     });
    
    // });
    // form.on('fileBegin', (name, file) => {
    //     file.path = 'backend/uploads/' + file.name;
    //     console.log(file.path);
    // })
    // res.status(200).json({
    //     message: "uploaded"
    // })
});

router.get('/status/:id', (req, res, next) => {
  Paper.findOne({_id: req.params.id}).then(
    paper => {
      res.status(200).json({
        message: "success",
        data: paper.paperStatusCode
      });
    }
  ).catch(err => {
    res.status(404).json({
      error: err
    });
  });
})

router.put('/status/:id', (req, res, next) => {
    Paper.findByIdAndUpdate(
      { _id : req.params.id },
      {
        $set: {paperStatusCode: req.body.status}
      },
      { new : true },
      (err, response) => {
        if(err){
          res.status(500).json({
            error: err
          });
        }else{
          res.status(201).json({
            message: "Paper Updated!",
            data: response
          });
        }
      }
    );
  });

module.exports = router;