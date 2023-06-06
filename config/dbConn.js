const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB