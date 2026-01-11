import { NextResponse } from 'next/server'

export async function GET() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
  return NextResponse.redirect(`${API_URL}/api/auth/steam`)
}
