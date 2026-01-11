import express from 'express'
import { getProfile, updateProfile, connectSteam, connectEpic } from '../controllers/users.js'
import { authenticate } from '../middleware/auth.js'

const router = express.Router()

// All routes require authentication
router.use(authenticate)

router.get('/profile', getProfile)
router.put('/profile', updateProfile)
router.post('/connect/steam', connectSteam)
router.post('/connect/epic', connectEpic)

export default router
