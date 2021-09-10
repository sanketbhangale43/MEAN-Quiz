const express = require('express')
const router = express.Router();
require('../DB/conn');
const User = require('../Models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

/* -------------------------------------------------------------------------- */
/*                                  API URLS                                  */
/* -------------------------------------------------------------------------- */
/* -------------------------------- Register -------------------------------- */
router.post('/api/signup', async (req, res) => {
    console.log(req.body);

    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(422).json({ error: "Plz fill all the details" });
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(200).json({ msg: "email already exists" });
        }

        const user = new User({ name, email, password })
        await user.save();
        return res.status(200).json({ msg: "success", token: token });
    } catch (err) {
        return res.status(500);
    }
})


/* ---------------------------------- Login --------------------------------- */
router.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "plz fill all the details" });
    }

    try {
        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)
            const token = await userLogin.generateAuthtoken()

            if (isMatch) {
                return res.status(200).json({ msg: "success", token: token });
            } else {
                return res.status(200).json({ msg: "invalid credentials" });
            }
        } else {
            return res.status(200).json({ msg: "invalid credentials" });
        }
    } catch (err) {
        return res.status(500).json({ msg: "failed" });
    }
})


/* -------------------------------------------------------------------------- */
/*                                   EXPORTS                                  */
/* -------------------------------------------------------------------------- */
module.exports = router;