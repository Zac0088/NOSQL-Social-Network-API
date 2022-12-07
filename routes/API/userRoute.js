const router = require('express').Router();
const { addFriend, removeFriend } = require('../../controllers/userControler');
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  removefriend,
  addFriend
} = require('../../controllers/userController');

// /api/students
router.route('/').get(getUsers)
.post(createUser);

// /api/students/:studentId
router.route('/:UserId').get(getSingleUser)
.delete(deleteUser)
.put(updateUser);

// /api/students/:studentId/assignments
router.route('/:userId/friend').post(addFriend);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:userId/friend').delete(removeFriend);

module.exports = router;
