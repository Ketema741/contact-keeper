const express = require('express')
const router = express.Router()

// @route       get api/contacts
// @desc        get all user contanct
// @access      public

router.get('/',(req, res) => {
    res.send('register a user')
})

// @route       POST api/contacts
// @desc        add new contanct
// @access      private

router.post('/',(req, res) => {
    res.send('Add contact')
})

// @route       PUT api/contacts/:id
// @desc        update contanct
// @access      private

router.put('/',(req, res) => {
    res.send('update contact')
})


// @route       DELETE api/contacts
// @desc        delete contanct
// @access      private

router.delete('/',(req, res) => {
    res.send('Delete contact')
})

module.exports = router;