"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Calendar, MapPin } from "lucide-react"
import type { Match } from "@/lib/handball-api"
import { getAllMatches, deleteMatch } from "@/lib/matches-storage"
import Link from "next/link"

export default function AdminMatchesPage() {
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const isLoggedIn = sessionStorage.getItem("admin_logged_in")
    if (!isLoggedIn) {
      router.push("/admin")
      return
    }

    loadMatches()
  }, [router])

  const loadMatches = async () => {
    const data = await getAllMatches()
    setMatches(data)
    setLoading(false)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce match ?")) return

    await deleteMatch(id)
    loadMatches()
  }

  const upcomingMatches = matches.filter((m) => m.status === "upcoming")
  const finishedMatches = matches.filter((m) => m.status === "finished")

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center">Chargement...</div>
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Gestion des Matchs</h1>
              <p className="text-muted-foreground">Créez et gérez les matchs de toutes les équipes</p>
            </div>
            <Link href="/admin/matches/new">
              <Button size="lg">
                <Plus className="mr-2 h-5 w-5" />
                Nouveau Match
              </Button>
            </Link>
          </div>

          {/* Upcoming Matches */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Matchs à Venir ({upcomingMatches.length})</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {upcomingMatches.map((match) => (
                <MatchCard key={match.id} match={match} onDelete={handleDelete} />
              ))}
              {upcomingMatches.length === 0 && (
                <Card className="col-span-2">
                  <CardContent className="py-12 text-center text-muted-foreground">Aucun match à venir</CardContent>
                </Card>
              )}
            </div>
          </section>

          {/* Finished Matches */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">Matchs Terminés ({finishedMatches.length})</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {finishedMatches.map((match) => (
                <MatchCard key={match.id} match={match} onDelete={handleDelete} />
              ))}
              {finishedMatches.length === 0 && (
                <Card className="col-span-2">
                  <CardContent className="py-12 text-center text-muted-foreground">
                    Aucun résultat enregistré
                  </CardContent>
                </Card>
              )}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

function MatchCard({ match, onDelete }: { match: Match; onDelete: (id: string) => void }) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary">{match.category}</Badge>
          <Badge variant={match.status === "finished" ? "default" : "outline"}>
            {match.status === "finished" ? "Terminé" : "À venir"}
          </Badge>
        </div>
        <CardTitle className="text-base">{match.competition}</CardTitle>
        <CardDescription className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {new Date(match.date).toLocaleDateString("fr-FR")} - {match.time}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {match.location}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center justify-center gap-4">
          <div className="flex-1 text-right">
            <p className="font-semibold">{match.homeTeam}</p>
          </div>
          {match.status === "finished" ? (
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-muted font-bold">
                {match.homeScore}
              </div>
              <span className="text-muted-foreground">-</span>
              <div className="flex h-10 w-10 items-center justify-center rounded bg-muted font-bold">
                {match.awayScore}
              </div>
            </div>
          ) : (
            <div className="rounded-full bg-muted px-3 py-1 text-sm font-semibold">VS</div>
          )}
          <div className="flex-1 text-left">
            <p className="font-semibold">{match.awayTeam}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Link href={`/admin/matches/${match.id}/edit`} className="flex-1">
            <Button variant="outline" className="w-full bg-transparent" size="sm">
              <Edit className="mr-2 h-4 w-4" />
              {match.status === "finished" ? "Modifier" : "Ajouter Résultat"}
            </Button>
          </Link>
          <Button variant="outline" size="sm" onClick={() => onDelete(match.id)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
