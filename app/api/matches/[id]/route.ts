import { NextResponse } from "next/server"
import { matchesStore } from "../route"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const match = matchesStore.find((m) => m.id === id)
  
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
  const index = matchesStore.findIndex((m) => m.id === id)
  
  if (index === -1) {
    return NextResponse.json({ error: "Match not found" }, { status: 404 })
  }
  
  const updatedMatch = {
    ...matchesStore[index],
    ...updates,
  }
  matchesStore[index] = updatedMatch
  
  return NextResponse.json(updatedMatch)
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const index = matchesStore.findIndex((m) => m.id === id)
  
  if (index === -1) {
    return NextResponse.json({ error: "Match not found" }, { status: 404 })
  }
  
  matchesStore.splice(index, 1)
  
  return NextResponse.json({ success: true })
}
