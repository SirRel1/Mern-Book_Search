const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/googlebooks' || process.env.mongo_db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
