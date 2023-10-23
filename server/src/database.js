const mongoose = require('mongoose');
mongoose.set("strictQuery", false); //added
const User = require('./models/user.model');

const connection = 'mongodb://mongo:27017/dockerize-me'; 
/* Go to MongoDB Atlas on the web and follow the steps to create an login auth. Then replace your username and password in the below address */
//const connection = "mongodb+srv://yourUserName:yourPassword@cluster0.hgetl3b.mongodb.net/local_library?retryWrites=true&w=majority&appName=AtlasApp";

const connectDb = async () => {
  return await mongoose.connect(connection);
};

module.exports = connectDb;
