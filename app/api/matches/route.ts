import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import type { Match } from "@/lib/handball-api"

const DATA_FILE = path.join(process.cwd(), "data", "matches.json")

function getInitialMatches(): Match[] {
  return []
}

function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), "data")
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

function readMatchesFromFile(): Match[] {
  try {
    ensureDataDirectory()
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, "utf-8")
      return JSON.parse(data)
    } else {
      const initialMatches = getInitialMatches()
      writeMatchesToFile(initialMatches)
      return initialMatches
    }
  } catch (error) {
    console.error("Error reading matches file:", error)
    return getInitialMatches()
  }
}

function writeMatchesToFile(matches: Match[]) {
  try {
    ensureDataDirectory()
    fs.writeFileSync(DATA_FILE, JSON.stringify(matches, null, 2), "utf-8")
  } catch (error) {
    console.error("Error writing matches file:", error)
  }
}

export async function GET() {
  const matches = readMatchesFromFile()
  const sorted = matches.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return NextResponse.json(sorted)
}

export async function POST(request: Request) {
  const match = await request.json()
  const matches = readMatchesFromFile()
  
  const newMatch: Match = {
    ...match,
    id: Date.now().toString(),
  }
  
  matches.push(newMatch)
  writeMatchesToFile(matches)
  
  return NextResponse.json(newMatch)
}
