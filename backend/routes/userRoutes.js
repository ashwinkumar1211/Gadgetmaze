import express from 'express'
const router = express.Router()
import {authUser,registerUser,getUserProfile,updatedUserProfile, getUsers, deleteUser, updatedUser, getUserById } from '../controllers/userController.js'
import {protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router.route('/profile').get(protect,getUserProfile).put(protect, updatedUserProfile)
router.route('/:id').delete(protect,admin,deleteUser).get(protect,admin,getUserById).put(protect,admin,updatedUser)


export default router
