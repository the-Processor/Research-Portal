const express = require('express');
const fs = require('fs');
const formidable = require('formidable');
const Paper = require('../models/paper');
const { compareSync } = require('bcrypt');
const router = express.Router();

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

router.post('', (req, res, next) => {
    console.log(req.body)
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        var error = 0;
        var old_path = files.file.path;
        var new_path = 'uploads/' + files.file.name;
        // fs.rename(old_path, new_path, (err) => {
        //     if(err) throw err;
        //     res.status(201).json({
        //         message: "success"
        //     })
        // })
        fs.readFile(old_path, function (err, data) {
            if (err){
                error++;
                throw err;
            }
            console.log('File read!');

            // Write the file
            fs.writeFile(new_path, data, function (err) {
                if (err){
                    error++;
                    throw err;
                }
                res.write('File uploaded and moved!');
                res.end();
                console.log('File written!');
            });

            // Delete the file
            fs.unlink(old_path, function (err) {
                if (err){
                    error++;
                    throw err;
                }
                console.log('File deleted!');
            });
            if(error==0){
                console.log(req)
                console.log(req.body.keywords);
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
                        name: req.body.name1,
                        email: req.body.email1,
                        institute: req.body.institute1,
                        contact: req.body.contact1
                    },
                    coAuthor2: {
                        name: req.body.name2,
                        email: req.body.email2,
                        institute: req.body.institute2,
                        contact: req.body.contact2
                    },
                    publisher: req.body.publisher,
                    publicationDate: req.body.date,
                    paperPath: new_path,
                    paperStatuscode: req.body.status
                });
                Paper.save()
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
            }
        });
    
    });
    // form.on('fileBegin', (name, file) => {
    //     file.path = 'backend/uploads/' + file.name;
    //     console.log(file.path);
    // })
    // res.status(200).json({
    //     message: "uploaded"
    // })
})

module.exports = router;