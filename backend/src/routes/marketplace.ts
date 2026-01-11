import express from 'express'
import { getItems, getItem, createListing, updateListing, deleteListing } from '../controllers/marketplace.js'
import { authenticate } from '../middleware/auth.js'

const router = express.Router()

// Public routes
router.get('/items', getItems)
router.get('/items/:id', getItem)

// Protected routes
router.use(authenticate)
router.post('/listings', createListing)
router.put('/listings/:id', updateListing)
router.delete('/listings/:id', deleteListing)

export default router
