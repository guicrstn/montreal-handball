import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, Heart, Users, Award } from 'lucide-react'

export default function ClubPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl text-balance">
                Le Club
              </h1>
              <p className="text-lg text-primary-foreground/90 text-balance">
                Découvrez l'histoire, les valeurs et la mission du Montréal Handball
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold text-center">Notre Histoire</h2>
              <div className="prose prose-lg mx-auto">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Le Montréal Handball a été fondé en <strong>2018</strong> par <strong>Sylvain Caminati</strong>, 
                  qui est toujours à la tête du club en tant que président. Avec la volonté de promouvoir 
                  le handball dans la région de l'Ain, le club s'est développé au fil des années pour 
                  accueillir des joueurs et joueuses de tous niveaux.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Nous proposons des entraînements adaptés à différentes catégories d'âge, des plus jeunes 
                  jusqu'aux équipes seniors. Notre philosophie est simple : le plaisir du jeu, 
                  le respect et le dépassement de soi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Nos Valeurs</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Nous visons l'excellence dans notre pratique sportive tout en respectant l'équilibre 
                    entre performance et plaisir.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Heart className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Passion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    La passion du handball nous anime au quotidien et se transmet à travers nos entraînements 
                    et nos matchs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Solidarité</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    L'esprit d'équipe et la solidarité sont au coeur de notre club. Nous progressons ensemble.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Respect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Le respect des adversaires, des arbitres et des coéquipiers est une valeur fondamentale 
                    de notre club.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center text-3xl font-bold">Nos Installations</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Gymnase du Collège Théodore Rosset</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Notre club évolue au Gymnase du Collège Théodore Rosset à Montréal-la-Cluse, 
                        dans le département de l'Ain. Le gymnase dispose de toutes les installations 
                        nécessaires pour la pratique du handball : terrain homologué, vestiaires et espace de convivialité.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Équipements</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Le club met à disposition tout le matériel nécessaire : ballons, chasubles, plots 
                        d'entraînement, et équipements de protection.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">Horaires d'entraînement</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Les entraînements ont lieu plusieurs fois par semaine selon les catégories. 
                        Consultez la page <a href="/equipes" className="text-primary hover:underline font-medium">Équipes</a> pour 
                        connaître les créneaux disponibles.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* President Section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-8 text-3xl font-bold">Notre Président</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold">Sylvain Caminati</h3>
                    <p className="text-muted-foreground">Fondateur et Président</p>
                    <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
                      Fondateur du club en 2018, Sylvain Caminati continue de diriger le Montréal Handball 
                      avec passion et dévouement, guidant le développement du club et de ses équipes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
