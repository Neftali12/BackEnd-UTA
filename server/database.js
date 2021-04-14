const mongoose = require('mongoose');

//mongodb://username:password@host:port/database
const URI = 'mongodb+srv://AVUTA:Neftaligjc15@cluster0.29r8p.mongodb.net/aventonUTA?retryWrites=true&w=majority'
mongoose.connect(URI,{ useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
