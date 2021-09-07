const express = require('express')
const router = express.Router();
require('../DB/conn');
const User = require('../Models/User')
const Quiz = require('../Models/Quiz')
const VerifyToken = require('../middleware/VerifyToken');

/* -------------------------------------------------------------------------- */
/*                                  API URLS                                  */
/* -------------------------------------------------------------------------- */
/* -------------------------------- Register -------------------------------- */
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
        return res.status(200).json({ msg: "success" });
    } catch (err) {
        res.send(500);
        console.log(err);
    }
})



router.get('/api/all-quizzes', VerifyToken, async (req, res) => {
    try {
        const data = await Quiz.find({});
        return res.status(200).json({ msg: "success", data });
    } catch (err) {
        res.send(500);
        console.log(err);
    }
})




/* -------------------------------------------------------------------------- */
/*                                   EXPORTS                                  */
/* -------------------------------------------------------------------------- */
module.exports = router;