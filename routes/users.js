const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator/check')

// @route       POST api/users
// @desc        register a user
// @access      public
router.post(
    '/',
    [
        check("name", "please add name")
            .not()
            .isEmpty(),
        check("email", "please include a valid email!").isEmail(),
        check("password", "please enter a password with 6 or more characters")
            .isLength({min:6}),
    ],
    async (req, res) => { 
        const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		} 

        const { name, email, password } = req.body;

		try {
			let user = await User.findOne({ email:email });

			if (user) {
				return res.status(400).json({ msg: 'User already exists' });
			}

			user = new User({
				name,
				email,
				password
			});

			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			await user.save();

			res.send('user saved')
			
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
    }
);

module.exports = router;