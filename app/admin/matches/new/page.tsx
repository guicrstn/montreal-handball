"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"
import { clubs, getMontrealTeams, getOpponentClubs } from "@/lib/clubs-database"

const categories = [
  "-13 Garcons",
  "-15 Filles",
  "-15 Garcons",
  "-18 Filles",
  "-18 Garcons",
  "Seniors Masculins",
  "Seniors Feminins"
]

const competitions = [
  "Championnat Regional",
  "Championnat Departemental",
  "Coupe de l'Ain",
  "Coupe de France",
  "Match Amical",
  "Tournoi"
]

export default function NewMatchPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const [homeTeamId, setHomeTeamId] = useState("")
  const [awayTeamId, setAwayTeamId] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [location, setLocation] = useState("Gymnase du College Theodore Rosset")
  const [category, setCategory] = useState("")
  const [competition, setCompetition] = useState("")

  const montrealTeams = getMontrealTeams()
  const opponentClubs = getOpponentClubs()

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("admin_logged_in")
    if (!isLoggedIn) {
      router.push("/admin")
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const homeTeam = clubs.find((c) => c.id === homeTeamId)
    const awayTeam = clubs.find((c) => c.id === awayTeamId)

    if (!homeTeam || !awayTeam) {
      alert("Veuillez selectionner les deux equipes")
      setLoading(false)
      return
    }

    try {
      await fetch("/api/matches", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date,
          time,
          homeTeam: homeTeam.shortName,
          awayTeam: awayTeam.shortName,
          location,
          category,
          status: "upcoming",
          competition,
          homeTeamLogo: homeTeam.logoUrl,
          awayTeamLogo: awayTeam.logoUrl,
        }),
      })

      router.push("/admin/matches")
    } catch (error) {
      console.error("Error creating match:", error)
      setLoading(false)
    }
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
                <Calendar className="h-6 w-6 text-primary" />
                Creer un Nouveau Match
              </CardTitle>
              <CardDescription>Remplissez les informations du match a venir</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category">Categorie *</Label>
                  <Select value={category} onValueChange={setCategory} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectionnez une categorie" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Teams */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="homeTeam">Equipe a Domicile *</Label>
                    <Select value={homeTeamId} onValueChange={setHomeTeamId} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selectionnez l'equipe" />
                      </SelectTrigger>
                      <SelectContent>
                        <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                          Equipes de Montreal
                        </div>
                        {montrealTeams.map((club) => (
                          <SelectItem key={club.id} value={club.id}>
                            <div className="flex items-center gap-2">
                              <div className="h-5 w-5 rounded-full bg-primary/10" />
                              {club.shortName}
                            </div>
                          </SelectItem>
                        ))}
                        <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">Clubs adversaires</div>
                        {opponentClubs.map((club) => (
                          <SelectItem key={club.id} value={club.id}>
                            <div className="flex items-center gap-2">
                              <div className="h-5 w-5 rounded-full bg-muted" />
                              {club.shortName}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="awayTeam">Equipe a l'Exterieur *</Label>
                    <Select value={awayTeamId} onValueChange={setAwayTeamId} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selectionnez l'equipe" />
                      </SelectTrigger>
                      <SelectContent>
                        <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                          Equipes de Montreal
                        </div>
                        {montrealTeams.map((club) => (
                          <SelectItem key={club.id} value={club.id}>
                            <div className="flex items-center gap-2">
                              <div className="h-5 w-5 rounded-full bg-primary/10" />
                              {club.shortName}
                            </div>
                          </SelectItem>
                        ))}
                        <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">Clubs adversaires</div>
                        {opponentClubs.map((club) => (
                          <SelectItem key={club.id} value={club.id}>
                            <div className="flex items-center gap-2">
                              <div className="h-5 w-5 rounded-full bg-muted" />
                              {club.shortName}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Date and Time */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date du Match *</Label>
                    <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Heure *</Label>
                    <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location">Lieu *</Label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ex: Gymnase du College Theodore Rosset"
                    required
                  />
                </div>

                {/* Competition */}
                <div className="space-y-2">
                  <Label htmlFor="competition">Competition *</Label>
                  <Select value={competition} onValueChange={setCompetition} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectionnez une competition" />
                    </SelectTrigger>
                    <SelectContent>
                      {competitions.map((comp) => (
                        <SelectItem key={comp} value={comp}>
                          {comp}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="flex-1" disabled={loading}>
                    {loading ? "Creation..." : "Creer le Match"}
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
