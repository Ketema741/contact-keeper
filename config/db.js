const mongoose = require('mongoose')
const config = require('config')
const mongoURI = config.get('mongoURI')

const connect = async () => {
    try {

        await mongoose.connect(mongoURI);
        console.log('mongoDB connected')

    } catch (err) {

        console.error(err.message);
        process.exit(1);

    }
}
module.exports = connect;