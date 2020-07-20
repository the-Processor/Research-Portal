const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const noticeRoutes = require('./routes/notices');
const usersRoutes = require('./routes/users');
const queriesRoutes = require('./routes/queries');

const app = express();

// =============================Database Connectivity=========================================


// Connect to local mongo db
const LOCAL_URL = 'mongodb://127.0.0.1:27017/research-portal';
mongoose.connect(LOCAL_URL, { useNewUrlParser: true, useUnifiedTopology: true });


// Connect to ATLAS
// const REMOTE_URL = 'mongodb+srv://shoaib:pass-mongodb-1999@myfreecluster.uqauj.mongodb.net/prime-manager?retryWrites=true&w=majority';
// mongoose.connect(REMOTE_URL, { useNewUrlParser: true, useUnifiedTopology: true });


// ===========================================================================================

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/images', express.static(path.join('backend/public/users/images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers', 'x-www-form-urlencodedOrigin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, UPDATE, DELETE, OPTIONS');
  next();
})

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/notices', noticeRoutes);
app.use('/api/v1/queries', queriesRoutes);
module.exports = app;
