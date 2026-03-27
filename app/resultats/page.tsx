import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Trophy, Construction } from "lucide-react"

export default function ResultatsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl text-balance">Résultats et Matchs</h1>
              <p className="text-lg text-primary-foreground/90 text-balance">
                Suivez les performances de toutes nos équipes
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Matches */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center gap-3">
              <Calendar className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Prochains Matchs</h2>
            </div>
            <Card>
              <CardContent className="py-12">
                <div className="flex flex-col items-center justify-center text-center">
                  <Construction className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-lg font-medium text-muted-foreground">Section en cours de mise en place</p>
                  <p className="text-sm text-muted-foreground mt-2">Les matchs à venir seront bientôt disponibles</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recent Results */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center gap-3">
              <Trophy className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Derniers Résultats</h2>
            </div>
            <Card>
              <CardContent className="py-12">
                <div className="flex flex-col items-center justify-center text-center">
                  <Construction className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-lg font-medium text-muted-foreground">Section en cours de mise en place</p>
                  <p className="text-sm text-muted-foreground mt-2">Les résultats seront bientôt disponibles</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
