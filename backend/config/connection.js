const mongoose = require('mongoose');

const connectMongoDb = async (dbUrl) => {
    //connection
    mongoose.connect(dbUrl).
        then(() =>
            console.log("database connected successfully")).
        catch((error) => console.log(error))
}

module.exports = {
    connectMongoDb,
};