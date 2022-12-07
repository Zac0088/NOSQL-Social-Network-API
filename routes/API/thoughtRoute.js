const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReactions,
  deleteReactions
} = require('../../controllers/thoughtController');

// /api/students
router.route('/').get(getThought).post(createThought);

// /api/students/:studentId
router.route('/:thoughtId/reactions').post(createReactions);

// /api/students/:studentId/assignments
router.route('/:thoughtId/reactions').delete(deleteReactions);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:thoughtId').get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

module.exports = router;
