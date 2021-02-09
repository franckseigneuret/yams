const mongoose = require('mongoose');
 
// useNewUrlParser ;)
var options = {
 connectTimeoutMS: 5000,
 useNewUrlParser: true,
 useUnifiedTopology: true
};
// --------------------- BDD -----------------------------------------------------
mongoose.connect('mongodb+srv://user_morningnews:goodmorning@cluster0.perci.mongodb.net/morningnews?retryWrites=true&w=majority',
 options,
 function (err) {
   if (err) {
     console.log(`error, failed to connect to the database because --> ${err}`);
   } else {
     console.info('*** Database XXXXX connection : Success ***');
   }
 }
);
 
module.exports = mongoose