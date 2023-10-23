const mongoose = require('mongoose');
mongoose.set("strictQuery", false); //added
const User = require('./models/user.model');

const connection = 'mongodb://mongo:27017/dockerize-me'; 
//const connection = 'mongodb://localhost:27017/dockerize-me';
//const connection = "mongodb+srv://yupari87157:OmksrBHo4DmIyfhw@cluster0.hgetl3b.mongodb.net/local_library?retryWrites=true&w=majority&appName=AtlasApp";

const connectDb = async () => {
  return await mongoose.connect(connection);
};

module.exports = connectDb;
