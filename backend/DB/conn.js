const mongoose = require('mongoose')

// connect to MongoDB
mongoose.connect(process.env.DATABASE).then(() => {
    console.log("Success to connect to the DB")
}).catch((err) => {
    console.log("Failed to connect to the DB")
})
