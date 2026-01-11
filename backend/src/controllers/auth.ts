import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import passport from 'passport'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d'

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, username } = req.body

    // TODO: Validate input
    // TODO: Check if user exists
    // TODO: Create user in database
    // TODO: Hash password

    const hashedPassword = await bcrypt.hash(password, 10)

    // TODO: Save user to database
    // const user = await createUser({ email, password: hashedPassword, username })

    // Generate JWT
    const token = jwt.sign(
      { userId: 'temp-user-id', email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    )

    res.status(201).json({
      message: 'User created successfully',
      token,
      user: {
        email,
        username,
      },
    })
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    // TODO: Find user in database
    // TODO: Verify password
    // TODO: Generate JWT

    res.json({
      message: 'Login successful',
      token: 'temp-token',
    })
  } catch (error: any) {
    res.status(401).json({ error: 'Invalid credentials' })
  }
}

export const steamAuth = (req: Request, res: Response) => {
  // TODO: Implement Steam OpenID authentication
  res.json({ message: 'Steam auth - coming soon' })
}

export const steamCallback = (req: Request, res: Response) => {
  // TODO: Handle Steam callback
  res.json({ message: 'Steam callback - coming soon' })
}

export const epicAuth = (req: Request, res: Response) => {
  // TODO: Implement Epic Games OAuth
  res.json({ message: 'Epic Games auth - coming soon' })
}

export const epicCallback = (req: Request, res: Response) => {
  // TODO: Handle Epic Games callback
  res.json({ message: 'Epic Games callback - coming soon' })
}
