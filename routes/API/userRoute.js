const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  removeFriend,
  addFriend
} = require('../../controllers/userControler');

// /api/students
router.route('/').get(getUsers)
.post(createUser);

// /api/students/:studentId
router.route('/:UserId').get(getSingleUser)
.delete(deleteUser)
.put(updateUser);

// /api/students/:studentId/assignments
router.route('/:userId/friend/:friendId').post(addFriend);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:userId/friend/:friendId').delete(removeFriend);

module.exports = router;
