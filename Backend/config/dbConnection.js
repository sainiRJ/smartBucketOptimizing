const mongoose = require('mongoose')
const dbConnect =()=> {
    mongoose.connect('mongodb+srv://sarita:sarita9643@cluster0.gbywgfa.mongodb.net/seekex',
    {
      useUnifiedTopology: true
    }
  ).then(()=>{
        console.log('Database connection successfully')
  }).catch((e)=>{
        console.log('Failed to connect database',e)
  });
}
module.exports ={
    dbConnect
}