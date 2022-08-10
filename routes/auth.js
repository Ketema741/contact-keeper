const express = require('express')
const router = express.Router()

// @route       GET api/auth
// @desc        Get loged in user
// @access      private
router.get('/', (req, res) => {
    res.send('Get loged in user')
})

// @route       POST api/auth
// @desc        auth user && get token
// @access      public
router.post('/', (req, res) => {
    res.send('log in user')
})

module.exports = router;