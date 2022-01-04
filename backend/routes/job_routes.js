const express = require('express')
const router = express.Router()

const { createJob, getAllJob, getAllJobById, deleteJob, updateJob } = require('../controller/job_logic')

router.get('/',getAllJob)
router.get('/:id',getAllJobById)
router.post('/',createJob)
router.put('/:id',updateJob)
router.delete('/:id',deleteJob)


module.exports = router