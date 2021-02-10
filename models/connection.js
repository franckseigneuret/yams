const mongoose = require('mongoose');
 
// useNewUrlParser ;)
var options = {
 connectTimeoutMS: 5000,
 useNewUrlParser: true,
 useUnifiedTopology: true
};
// --------------------- BDD -----------------------------------------------------
mongoose.connect('mongodb+srv://user_morningnews:goodmorning@cluster0.perci.mongodb.net/yams?retryWrites=true&w=majority',
 options,
 function (err) {
   if (err) {
     console.log(`error, failed to connect to the database because --> ${err}`);
   } else {
     console.info('*** Database YAMS connection : Success ***');
   }
 }
);
 
module.exports = mongoose