const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017//EmployeeDB');

//mongoose.connect('mongodb://localhost:27017//EmployeeDB').catch((err) =>{if (!err) { console.log('MongoDB Connection .') }

// const connectDB = async () => {
//     try {
//         mongoose.set('strictQuery', false)
//         mongoose.connect(process.env.MONGO_URI) 
//         console.log('Mongo connected')
//     } catch(error) {
//         console.log(error)
//         process.exit()
//     }
// }

// module.exports = connectDB
//request statement for employee model
require('./employee.model');

