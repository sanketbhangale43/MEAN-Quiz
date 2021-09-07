const mongoose = require('mongoose')


const quizSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    creator_id: {
        type: String,
        required: true
    },

    questions: [
        {
            question: {
                type: String,
                required: true
            },

            option_a: {
                type: String,
                required: true
            },


            option_b: {
                type: String,
                required: true
            },


            option_c: {
                type: String,
                required: true
            },

            option_d: {
                type: String,
                required: true
            },
            correct_options: []
        }
    ]
})


const Quiz = mongoose.model('Quiz', quizSchema)
module.exports = Quiz;

