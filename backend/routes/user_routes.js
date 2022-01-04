const express = require('express')
const { getAllUser, createUser, updateUser, deleteUser, logUser,getAllUserById } = require('../controller/user_logic')
const router = express.Router()


router.get('/',getAllUser)
router.get('/getById/:id',getAllUserById)
router.get('/login',logUser)

router.post('/',createUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

module.exports = router
