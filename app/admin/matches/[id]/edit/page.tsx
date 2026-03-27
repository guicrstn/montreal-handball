"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Trophy } from "lucide-react"
import Link from "next/link"
import type { Match } from "@/lib/handball-api"

export default function EditMatchPage() {
  const router = useRouter()
  const params = useParams()
  const matchId = params.id as string

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [match, setMatch] = useState<Match | null>(null)

  const [homeScore, setHomeScore] = useState("")
  const [awayScore, setAwayScore] = useState("")
  const [status, setStatus] = useState<"upcoming" | "finished">("upcoming")

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("admin_logged_in")
    if (!isLoggedIn) {
      router.push("/admin")
      return
    }

    loadMatch()
  }, [router, matchId])

  const loadMatch = async () => {
    try {
      const response = await fetch(`/api/matches/${matchId}`)
      if (response.ok) {
        const data = await response.json()
        setMatch(data)
        setHomeScore(data.homeScore?.toString() || "")
        setAwayScore(data.awayScore?.toString() || "")
        setStatus(data.status)
      }
    } catch (error) {
      console.error("Error loading match:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      await fetch(`/api/matches/${matchId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          homeScore: homeScore ? Number.parseInt(homeScore) : undefined,
          awayScore: awayScore ? Number.parseInt(awayScore) : undefined,
          status,
        }),
      })

      router.push("/admin/matches")
    } catch (error) {
      console.error("Error updating match:", error)
      setSaving(false)
    }
  }

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center">Chargement...</div>
  }

  if (!match) {
    return <div className="flex min-h-screen items-center justify-center">Match non trouve</div>
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <Link href="/admin/matches">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </Button>
          </Link>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Trophy className="h-6 w-6 text-primary" />
                {status === "finished" ? "Modifier le Resultat" : "Ajouter le Resultat"}
              </CardTitle>
              <CardDescription>
                {match.homeTeam} vs {match.awayTeam}
                <br />
                {new Date(match.date).toLocaleDateString("fr-FR")} - {match.time}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Match Info Display */}
                <div className="rounded-lg bg-muted/50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Equipe a Domicile</p>
                      <p className="font-semibold">{match.homeTeam}</p>
                    </div>
                    <div className="px-4 text-2xl font-bold text-muted-foreground">VS</div>
                    <div className="flex-1 text-right">
                      <p className="text-sm text-muted-foreground">Equipe a l'Exterieur</p>
                      <p className="font-semibold">{match.awayTeam}</p>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="space-y-2">
                  <Label htmlFor="status">Statut du Match *</Label>
                  <Select value={status} onValueChange={(value: "upcoming" | "finished") => setStatus(value)} required>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="upcoming">A venir</SelectItem>
                      <SelectItem value="finished">Termine</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Scores (only if finished) */}
                {status === "finished" && (
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="homeScore">Score Domicile *</Label>
                      <Input
                        id="homeScore"
                        type="number"
                        min="0"
                        value={homeScore}
                        onChange={(e) => setHomeScore(e.target.value)}
                        placeholder="0"
                        required={status === "finished"}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="awayScore">Score Exterieur *</Label>
                      <Input
                        id="awayScore"
                        type="number"
                        min="0"
                        value={awayScore}
                        onChange={(e) => setAwayScore(e.target.value)}
                        placeholder="0"
                        required={status === "finished"}
                      />
                    </div>
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="flex-1" disabled={saving}>
                    {saving ? "Enregistrement..." : "Enregistrer"}
                  </Button>
                  <Link href="/admin/matches" className="flex-1">
                    <Button type="button" variant="outline" className="w-full bg-transparent">
                      Annuler
                    </Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
