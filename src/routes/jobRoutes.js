const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const authMiddleware = require('../middlewares/authMiddleware');

// Create a job
router.post('/', authMiddleware, jobController.createJob);

// Update a job
router.put('/:id', authMiddleware, jobController.updateJob);

// Delete a job
router.delete('/:id', authMiddleware, jobController.deleteJob);

// Get all jobs
router.get('/', jobController.getJobs);

// Get posted jobs for the authenticated recruiter
router.get('/posted-jobs', authMiddleware, jobController.getPostedJobs);

// Get a job by ID
router.get('/:id', jobController.getJob);

module.exports = router;
