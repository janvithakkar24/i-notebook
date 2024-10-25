const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/notebook";

const connectToMongo = () => {
//   mongoose.connect(mongoURI, );
    mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully!!")
};

// export default connectToMongo;
module.exports = connectToMongo;
