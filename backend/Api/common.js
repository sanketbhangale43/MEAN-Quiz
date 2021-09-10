const express = require('express')
const router = express.Router();
require('../DB/conn');
const User = require('../Models/User')
const Quiz = require('../Models/Quiz')
const VerifyToken = require('../middleware/VerifyToken');

/* -------------------------------------------------------------------------- */
/*                                  API URLS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- Create Quiz ------------------------------ */
router.post('/api/create-quiz', VerifyToken, async (req, res) => {
    try {
        const { quiz_name, questions_arr } = req.body;

        console.log(JSON.parse(questions_arr));
        console.log(typeof (JSON.parse(questions_arr)));
        // Create new quiz obj
        const quiz_obj = new Quiz()
        quiz_obj.name = quiz_name;
        quiz_obj.creator_id = req.headers["_id"];
        quiz_obj.questions = JSON.parse(questions_arr);

        await quiz_obj.save();
        return res.json({ msg: "success" });
    } catch (err) {
        console.log(err);
    }
});

/* ------------------------------- All quizzes ------------------------------ */
router.get('/api/all-quizzes', VerifyToken, async (req, res) => {
    try {
        const data = await Quiz.find({});
        return res.json({ msg: "success", data });
    } catch (err) {
        console.log(err);
    }
});

/* ------------------------------- Simple Auth ------------------------------ */
router.get('/api/auth', VerifyToken, async (req, res) => {
    try {
        return res.json({ msg: "success" });
    } catch (err) {
        console.log(err);
    }
})

/* -------------------------------- Quiz data ------------------------------- */
router.get('/api/quiz', VerifyToken, async (req, res) => {
    try {
        const quiz_id = req.query.quiz_id;
        const quiz_obj = await Quiz.findOne({ _id: quiz_id });
        return res.json({ msg: "success", data: quiz_obj });
    } catch (err) {
        console.log(err);
    }
})
/* -------------------------------------------------------------------------- */
/*                                   EXPORTS                                  */
/* -------------------------------------------------------------------------- */
module.exports = router;