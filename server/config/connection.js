require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(process.env.mongo_db || "mongodb+srv://Sirel1:2wiceBorn@cluster0.9jiqw.mongodb.net/googlebooks?retryWrites=true&w=majority" , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
