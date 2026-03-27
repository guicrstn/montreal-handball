import { NextResponse } from "next/server"
import type { Match } from "@/lib/handball-api"

// In-memory storage for matches (works on Vercel serverless)
// Note: Data will reset on cold starts. For persistent storage, use a database.
let matchesStore: Match[] = []

export async function GET() {
  const sorted = [...matchesStore].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return NextResponse.json(sorted)
}

export async function POST(request: Request) {
  const match = await request.json()
  
  const newMatch: Match = {
    ...match,
    id: Date.now().toString(),
  }
  
  matchesStore.push(newMatch)
  
  return NextResponse.json(newMatch)
}

// Export for use in other route files
export { matchesStore }
