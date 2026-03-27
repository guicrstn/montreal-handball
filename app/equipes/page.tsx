import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users } from 'lucide-react'

export default function EquipesPage() {
  const teams = [
    {
      category: '-13 Garçons',
      ageGroup: '11-13 ans',
      description: 'Équipe masculine des moins de 13 ans. Apprentissage technique et initiation à la compétition.',
      schedule: 'Horaires à définir',
      color: 'bg-blue-500/10 text-blue-700 dark:text-blue-400',
    },
    {
      category: '-15 Filles',
      ageGroup: '13-15 ans',
      description: 'Équipe féminine des moins de 15 ans. Perfectionnement et participation aux championnats.',
      schedule: 'Horaires à définir',
      color: 'bg-pink-500/10 text-pink-700 dark:text-pink-400',
    },
    {
      category: '-15 Garçons',
      ageGroup: '13-15 ans',
      description: 'Équipe masculine des moins de 15 ans. Développement tactique et compétition départementale.',
      schedule: 'Horaires à définir',
      color: 'bg-green-500/10 text-green-700 dark:text-green-400',
    },
    {
      category: '-18 Filles',
      ageGroup: '15-18 ans',
      description: 'Équipe féminine des moins de 18 ans. Formation avancée et préparation au handball senior.',
      schedule: 'Horaires à définir',
      color: 'bg-purple-500/10 text-purple-700 dark:text-purple-400',
    },
    {
      category: '-18 Garçons',
      ageGroup: '15-18 ans',
      description: 'Équipe masculine des moins de 18 ans en entente avec Bellegarde. Compétition régionale.',
      schedule: 'Horaires à définir',
      color: 'bg-orange-500/10 text-orange-700 dark:text-orange-400',
      note: 'Entente avec Bellegarde',
    },
    {
      category: 'Seniors Garçons',
      ageGroup: '18+ ans',
      description: 'Équipe masculine senior évoluant en championnat.',
      schedule: 'Mardi 19h45-21h | Vendredi 20h30-22h',
      color: 'bg-primary/10 text-primary',
    },
    {
      category: 'Seniors Filles',
      ageGroup: '18+ ans',
      description: 'Équipe féminine senior dynamique et ambitieuse.',
      schedule: 'Horaires à définir',
      color: 'bg-secondary/10 text-secondary',
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl text-balance">
                Nos Équipes
              </h1>
              <p className="text-lg text-primary-foreground/90 text-balance">
                Découvrez toutes nos catégories
              </p>
            </div>
          </div>
        </section>

        {/* Teams Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Le Montréal Handball accueille des joueurs et joueuses de différentes catégories. 
                Que vous souhaitiez découvrir le handball ou progresser en compétition, nous avons une équipe pour vous.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teams.map((team) => (
                <Card key={team.category} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <Badge className={team.color} variant="secondary">
                        {team.ageGroup}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{team.category}</CardTitle>
                    {team.note && (
                      <Badge variant="outline" className="w-fit mt-2">
                        {team.note}
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      {team.description}
                    </p>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-xs font-medium text-muted-foreground">Entraînements</p>
                      <p className="mt-1 text-sm font-semibold">{team.schedule}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-balance">
                Intéressé par une de nos équipes ?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground text-balance">
                Contactez-nous pour plus d'informations ou pour venir essayer lors d'un entraînement.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Nous contacter
                </a>
                <a
                  href="tel:+33620906643"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Appeler le club
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
