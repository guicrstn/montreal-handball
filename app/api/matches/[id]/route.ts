import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import type { Match } from "@/lib/handball-api"

const DATA_FILE = path.join(process.cwd(), "data", "matches.json")

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
    }
    return []
  } catch (error) {
    console.error("Error reading matches file:", error)
    return []
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

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const matches = readMatchesFromFile()
  const match = matches.find((m) => m.id === id)
  
  if (!match) {
    return NextResponse.json({ error: "Match not found" }, { status: 404 })
  }
  
  return NextResponse.json(match)
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const updates = await request.json()
  const matches = readMatchesFromFile()
  const index = matches.findIndex((m) => m.id === id)
  
  if (index === -1) {
    return NextResponse.json({ error: "Match not found" }, { status: 404 })
  }
  
  const updatedMatch = {
    ...matches[index],
    ...updates,
  }
  matches[index] = updatedMatch
  writeMatchesToFile(matches)
  
  return NextResponse.json(updatedMatch)
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const matches = readMatchesFromFile()
  const filteredMatches = matches.filter((m) => m.id !== id)
  
  if (filteredMatches.length === matches.length) {
    return NextResponse.json({ error: "Match not found" }, { status: 404 })
  }
  
  writeMatchesToFile(filteredMatches)
  
  return NextResponse.json({ success: true })
}
