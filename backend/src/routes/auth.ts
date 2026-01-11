import express from 'express'
import { login, register, steamAuth, epicAuth, steamCallback, epicCallback } from '../controllers/auth.js'

const router = express.Router()

// Steam OAuth
router.get('/steam', steamAuth)
router.get('/steam/callback', steamCallback)

// Epic Games OAuth
router.get('/epic', epicAuth)
router.get('/epic/callback', epicCallback)

// Email auth
router.post('/register', register)
router.post('/login', login)

export default router
