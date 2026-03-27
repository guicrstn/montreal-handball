import fs from "fs"
import path from "path"
import type { Match } from "./handball-api"

const DATA_FILE = path.join(process.cwd(), "data", "matches.json")

function getInitialMatches(): Match[] {
  return [
    {
      id: "1",
      date: "2024-01-20",
      time: "20:00",
      homeTeam: "Montréal Handball",
      awayTeam: "Paris Handball",
      homeScore: 28,
      awayScore: 25,
      location: "Gymnase Municipal",
      category: "Seniors Masculins",
      status: "finished",
      competition: "Championnat Régional",
      homeTeamLogo: "/logos/montreal-handball.svg",
      awayTeamLogo: "/logos/paris-handball.svg",
    },
    {
      id: "2",
      date: "2024-01-22",
      time: "19:00",
      homeTeam: "Lyon HB",
      awayTeam: "Montréal Handball",
      homeScore: 22,
      awayScore: 26,
      location: "Palais des Sports Lyon",
      category: "Seniors Masculins",
      status: "finished",
      competition: "Championnat Régional",
      homeTeamLogo: "/logos/lyon-handball.svg",
      awayTeamLogo: "/logos/montreal-handball.svg",
    },
    {
      id: "3",
      date: "2024-01-27",
      time: "20:30",
      homeTeam: "Montréal Handball",
      awayTeam: "Marseille Provence HB",
      location: "Gymnase Municipal",
      category: "Seniors Masculins",
      status: "upcoming",
      competition: "Championnat Régional",
      homeTeamLogo: "/logos/montreal-handball.svg",
      awayTeamLogo: "/logos/marseille-handball.svg",
    },
  ]
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
      // First time, create file with initial data
      const initialMatches = getInitialMatches()
      writeMatchesToFile(initialMatches)
      return initialMatches
    }
  } catch (error) {
    console.error("[v0] Error reading matches file:", error)
    return getInitialMatches()
  }
}

function writeMatchesToFile(matches: Match[]) {
  try {
    ensureDataDirectory()
    fs.writeFileSync(DATA_FILE, JSON.stringify(matches, null, 2), "utf-8")
  } catch (error) {
    console.error("[v0] Error writing matches file:", error)
  }
}

export async function getAllMatches(): Promise<Match[]> {
  const matches = readMatchesFromFile()
  return matches.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getMatchById(id: string): Promise<Match | undefined> {
  const matches = readMatchesFromFile()
  return matches.find((m) => m.id === id)
}

export async function createMatch(match: Omit<Match, "id">): Promise<Match> {
  const matches = readMatchesFromFile()
  const newMatch: Match = {
    ...match,
    id: Date.now().toString(),
  }
  matches.push(newMatch)
  writeMatchesToFile(matches)
  console.log("[v0] Match created:", newMatch)
  return newMatch
}

export async function updateMatch(id: string, updates: Partial<Match>): Promise<Match | null> {
  const matches = readMatchesFromFile()
  const index = matches.findIndex((m) => m.id === id)

  if (index === -1) {
    console.log("[v0] Match not found for update:", id)
    return null
  }

  const updatedMatch = {
    ...matches[index],
    ...updates,
  }
  matches[index] = updatedMatch
  writeMatchesToFile(matches)
  console.log("[v0] Match updated:", updatedMatch)
  return updatedMatch
}

export async function deleteMatch(id: string): Promise<boolean> {
  const matches = readMatchesFromFile()
  const filteredMatches = matches.filter((m) => m.id !== id)

  if (filteredMatches.length === matches.length) {
    return false // Match not found
  }

  writeMatchesToFile(filteredMatches)
  console.log("[v0] Match deleted:", id)
  return true
}
