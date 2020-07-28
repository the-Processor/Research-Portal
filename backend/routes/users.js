const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const multer = require('multer');
// var fs = require('fs');
const User = require('../models/user');
const router = express.Router();







// ==============================================================================

// const MIME_TYPE_MAP = {
//   'image/png' : 'png',
//   'image/jpeg' : 'jpg',
//   'image/jpg' : 'jpg'
// };

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const isValid = MIME_TYPE_MAP[file.mimetype];
//     let error = new Error("Invalid MIME type");
//     if(isValid){
//       error = null
//     }
//     cb(error, 'backend/public/users/images');
//   },
//   filename: (req, file, cb) => {
//     const name = req.body.email.split('@')[0];
//     const ext = MIME_TYPE_MAP[file.mimetype];
//     cb(null, name + '_' + Date.now() + '.' + ext);
//   }
// });

// const upload = multer({storage: multerStorage});

// ==============================================================================

router.get('',(req, res, next) => {
  User.find().then(
    documents => {
      console.log(documents)
      res.status(200).json({
        message: 'Success',
        data: documents
        // data: [{
        //   _id: documents._id,
        //   name: documents.name,
        //   type: documents.type,
        //   contact: documents.contact,
        //   email: documents.email,
        //   password: documents.password,
        //   address: {
        //     building: documents.building,
        //     street: documents.street,
        //     city: documents.city,
        //     district: documents.district,
        //     pincode: documents.pincode
        //   },
        //   institute: documents.institute,
        //   __v: documents.__v
        // }]
      });
    }
  )
});

// router.post('', upload.single('image'), (req, res, next) => {
//   bcrypt.hash(req.body.password, 10)
//   .then(hash => {
//     const url = req.protocol + '://' + req.get('host');
//     const user = new User({
//       name: req.body.name,
//       type: req.body.type,
//       contact: req.body.contact,
//       image: url + '/images/' + req.file.filename,
//       email: req.body.email,
//       password: hash,
//       qualification: req.body.qualification,
//       designation: req.body.designation,
//       experience: req.body.experience,
//       salary: req.body.salary,
//       class: req.body.class,
//       division: req.body.division
//     });
//     user.save()
//     .then(result => {
//       res.setHeader("Access-Control-Allow-Headers", "enctype");
//       res.status(201).json({
//         message: 'User Created!',
//         data: result
//       });
//     }).catch(err => {
//       res.status(500).json({
//         error: err
//       });
//     });
//   });
// });

router.post('', (req, res, next) => {
  console.log(req.body.password)
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user = new User({
      // person: {
      //   name: req.body.name,
      //   email: req.body.email
      // }
      name: req.body.name,
      type: req.body.type,
      contact: req.body.contact,
      email: req.body.email,
      password: hash,
      address: {
        building: req.body.building,
        street: req.body.street,
        city: req.body.city,
        district: req.body.district,
        pincode: req.body.pincode
      },
      institute: req.body.institute
    });
    user.save()
    .then(result => {
      console.log(result)
      res.setHeader("Access-Control-Allow-Headers", "enctype");
      res.status(201).json({
        message: 'User Created!',
        data: result
        // data: {
        //   _id: result._id,
        //   name: result.name,
        //   type: result.type,
        //   contact: result.contact,
        //   email: result.email,
        //   password: result.password,
        //   address: {
        //     building: result.building,
        //     street: result.street,
        //     city: result.city,
        //     district: result.district,
        //     pincode: result.pincode
        //   },
        //   institute: result.institute,
        //   __v: result.__v
        // }
      });
    }).catch(err => {
      res.status(500).json({
        error: err
      });
    });
  });
});

// router.put('/:id', upload.single('image'), (req, res, next) => {
//   bcrypt.hash(req.body.password, 10)
//   .then(hash => {
//     const url = req.protocol + '://' + req.get('host');
//     User.findByIdAndUpdate(
//       { _id : req.params.id },
//       {
//         name: req.body.name,
//         type: req.body.type,
//         contact: req.body.contact,
//         image: url + '/images/' + req.file.filename,
//         email: req.body.email,
//         password: hash,
//         qualification: req.body.qualification,
//         designation: req.body.designation,
//         experience: req.body.experience,
//         salary: req.body.salary,
//         class: req.body.class,
//         division: req.body.division
//       },
//       { new: true },
//       (err, updatedUserData) => {
//         if(err){
//           res.status(500).json({
//             error: err
//           });
//         }else{
//           console.log(req.file)
//           res.status(201).json({
//             message: 'User Updated!',
//             data: updatedUserData
//           });
//         }
//       }
//     );
//   });
// });

// router.patch('/:id', upload.single('image'), (req, res, next) => {
//   const user = new User()
//   User.findByIdAndUpdate(
//     { _id: req.params.id},
//     {
//       image: req.file.path
//     },
//     { new: true},
//     (err, updatedUserData) => {
//       if(err){
//         res.status(500).json({
//           error: err
//         });
//       }else{
//         console.log(req.file)
//         res.status(201).json({
//           message: 'User Updated!',
//           data: updatedUserData
//         });
//       }
//     }
//   )
// })

// router.delete('/:id', (req, res, next) => {
//   User.deleteOne({ _id : req.params.id }).then(
//     (result) => {
//       res.status(200).json({
//         message: "User Deleted!",
//         data: result
//       }).catch(err => {
//         res.status(400).json({
//           error: err
//         })
//       })
//     }
//   )
// });

// router.post('/login', (req, res, next) => {
//   let fetchedUser;
//   User.findOne({email : req.body.email}).then(
//     fUser => {
//       if(!fUser){
//         return res.status(401).json({
//           error: 'Authentication Failed! 1'
//         })
//       }
//       fetchedUser = fUser;
//       return bcrypt.compare(req.body.password, fUser.password);
//     })
//     .then(result => {
//       if(!result){
//         return res.status(401).json({
//           error: 'Authentication Failed! 2'
//         })
//       }
//       const token = jwt.sign(
//         { email: fetchedUser.email, userId: fetchedUser._id },
//         'Hey_this_is_my_angular_app_created_in_2020',
//         { expiresIn: '1h' }
//       );
//       res.status(200).json({
//         uid: fetchedUser._id,
//         email: fetchedUser.email,
//         name: fetchedUser.name.split(' ')[0],
//         type: fetchedUser.type,
//         token: token,
//         expiresIn: 3600
//       });
//     })
//     .catch(err => {
//       return res.status(401).json({
//         error: 'Authentication Failed! 3'
//       })
//     })
// });

// router.get('/image/:id', (req, res, next) => {
//   User.findOne({ _id: req.params.id })
//   .then((fetchedRes) => {
//     if(fetchedRes.image){
//       res.status(200).json({
//         message: 'Image Found!!',
//         data: fetchedRes.image
//       });
//     }else{
//       res.status(404).json({
//         error: 'Image not Found'
//       });
//     }
//   })
//   .catch(err => {
//     res.status(404).json({
//       error: err
//     });
//   });
// });

// router.put('/passwords/:id', (req, res, next) => {
//   let fetchedUser;
//   User.findOne({ _id: req.params.id })
//   .then(
//     fUser => {
//       if(!fUser){
//         return res.status(401).json({
//           error: 'Authentication Failed! 1'
//         })
//       }
//       fetchedUser = fUser;
//       console.log(fetchedUser)
//       console.log(req.body)
//       return bcrypt.compare(req.body.oldPassword, fUser.password);
//     }
//   )
//   .then(
//     comparisonResult => {
//       if(!comparisonResult){
//         return res.status(401).json({
//           error: 'Authentication Failed! 2'
//         });
//       }
//       console.log(req.body.newPassword);
//       bcrypt.hash(req.body.newPassword, 10)
//       .then(
//         hash => {
//           User.updateOne(
//             { _id: req.params.id },
//             {
//               password: hash
//             }
//           ).then( response => {
//             res.status(201).json({
//               message: 'Password Updated!',
//               data: response
//             });
//           }).catch(err => {
//             res.status(500).json({
//               error : err
//             });
//           });
//         }
//       );
//     }
//   )
//   .catch(err => {
//     res.status(500).json({
//       error : 'shit'
//     });
//   });
// });

// router.put('/images/:id', upload.single('image'), (req, res, next) => {
//   const url = req.protocol + '://' + req.get('host');
//   User.updateOne(
//     { _id: req.params.id },
//     {
//       image: url + '/images/' + req.file.filename
//     }
//   ).then( response => {
//     // User.findOne({ _id: req.params.id })
//     // .then(
//     //   fUser => {
//     //     if(!fUser){
//     //       return res.status(401).json({
//     //         error: 'Authentication Failed! 1'
//     //       })
//     //     }
//     //     const filePath = fUser.image.split('/')[-1];
//     //     fs.stat(filePath, function (err, stats) {
//     //       console.log(stats);//here we got all information of file in stats variable

//     //       if (err) {
//     //           return console.error(err);
//     //       }

//     //       fs.unlink('./server/upload/my.csv',function(err){
//     //            if(err) return console.log(err);
//     //            console.log('file deleted successfully');
//     //       });
//     //    });
//     //   }
//     // )
//     res.status(201).json({
//       message: 'Profile image Updated!',
//       data: response
//     });
//   }).catch(err => {
//     res.status(500).json({
//       error : err
//     });
//   });
// })

module.exports = router;

