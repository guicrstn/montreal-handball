import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Trophy, ShoppingBag, MapPin, ExternalLink } from 'lucide-react'

export default function ActualitesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl text-balance">
                Actualites
              </h1>
              <p className="text-lg text-primary-foreground/90 text-balance">
                Toutes les dernieres nouvelles du club
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-12">
              
              {/* Article 1 - Seniors Garcons 16eme de finale */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-primary/5 p-6">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <Badge className="bg-primary text-primary-foreground">
                        <Trophy className="mr-1 h-3 w-3" />
                        Seniors Garcons
                      </Badge>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        Mars 2026
                      </span>
                    </div>
                    <h2 className="mb-4 text-2xl font-bold text-foreground">
                      16eme de finale - Fin du parcours pour nos Seniors
                    </h2>
                  </div>
                  
                  {/* Image Gallery */}
                  <div className="grid grid-cols-1 gap-2 p-2 md:grid-cols-3">
                    <img 
                      src="/actu-seniors-1.jpg" 
                      alt="Equipe seniors en cercle" 
                      className="h-64 w-full rounded-lg object-cover"
                    />
                    <img 
                      src="/actu-seniors-2.jpg" 
                      alt="Joueurs sur le terrain" 
                      className="h-64 w-full rounded-lg object-cover"
                    />
                    <img 
                      src="/actu-seniors-3.jpg" 
                      alt="Vue du gymnase pendant le match" 
                      className="h-64 w-full rounded-lg object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-6 flex items-center justify-center gap-4 rounded-lg bg-muted p-4">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Montreal Handball</p>
                        <p className="text-3xl font-bold text-primary">19</p>
                      </div>
                      <div className="text-2xl font-bold text-muted-foreground">-</div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Adversaire</p>
                        <p className="text-3xl font-bold">27</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        {"Le parcours des Seniors Garcons s'est arrete en 16eme de finale ce dimanche, a l'issue d'un match qui s'est solde par un score de 27 a 19."}
                      </p>
                      <p>
                        {"Malgre la defaite, l'equipe n'a rien lache et a porte haut les couleurs du club tout au long de la competition. Leur engagement, leur solidarite et leur combativite ont permis d'ecrire une tres belle page de notre histoire."}
                      </p>
                      <p className="font-semibold text-foreground">
                        {"Bravo a eux pour ce magnifique parcours, une grande premiere pour le club ! Vous pouvez etre fiers de vous !"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Article 2 - U18 Garcons Demi-finale */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-secondary/20 p-6">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <Badge className="bg-secondary text-secondary-foreground">
                        <Trophy className="mr-1 h-3 w-3" />
                        -18 Garcons
                      </Badge>
                      <Badge variant="outline" className="border-green-500 text-green-600">
                        Victoire
                      </Badge>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        Mars 2026
                      </span>
                    </div>
                    <h2 className="mb-4 text-2xl font-bold text-foreground">
                      {"Coupe de l'Ain - Direction la Finale !"}
                    </h2>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-6 rounded-lg bg-green-50 p-6 text-center dark:bg-green-950/30">
                      <p className="mb-2 text-sm font-semibold uppercase text-green-600">Demi-finale</p>
                      <div className="flex items-center justify-center gap-4">
                        <div className="text-center">
                          <p className="text-lg font-bold text-primary">Montreal HB</p>
                        </div>
                        <Badge className="bg-green-500 px-4 py-2 text-lg text-white">
                          Victoire
                        </Badge>
                        <div className="text-center">
                          <p className="text-lg font-bold">Ferney Voltaire</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        {"Nos -18 Garcons ont remporte leur demi-finale de la Coupe de l'Ain face a Ferney Voltaire !"}
                      </p>
                      <p>
                        {"Une performance remarquable qui leur ouvre les portes de la finale ou ils affronteront Trevoux."}
                      </p>
                    </div>
                    
                    <div className="mt-6 rounded-lg border-2 border-primary bg-primary/5 p-4 text-center">
                      <p className="text-sm font-semibold uppercase text-primary">Prochaine etape</p>
                      <p className="mt-2 text-xl font-bold text-foreground">
                        {"Finale Coupe de l'Ain"}
                      </p>
                      <p className="mt-1 text-lg">
                        Montreal HB <span className="mx-2 text-muted-foreground">vs</span> Trevoux
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Article 3 - Vente Gourmande */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-secondary/30 p-6">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <Badge className="bg-secondary text-secondary-foreground">
                        <ShoppingBag className="mr-1 h-3 w-3" />
                        Evenement
                      </Badge>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        Samedi 11 avril
                      </span>
                    </div>
                    <h2 className="mb-2 text-2xl font-bold text-foreground">
                      Vente Gourmande - Montreal Handball
                    </h2>
                    <p className="text-muted-foreground">
                      Envie de vous regaler tout en soutenant le club ? {"C'est"} le moment !
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
                    <div>
                      <img 
                        src="/actu-vente.jpg" 
                        alt="Affiche vente gourmande" 
                        className="w-full rounded-lg shadow-lg"
                      />
                    </div>
                    
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <Calendar className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold">Samedi 11 avril</p>
                            <p className="text-sm text-muted-foreground">De 8h30 a 12h</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold">Mairie de Montreal</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg bg-muted p-4">
                        <p className="mb-3 font-semibold">Au menu :</p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-secondary"></span>
                            Galette au sucre
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-secondary"></span>
                            {"Tarte a l'oignon"}
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-secondary"></span>
                            Pizza jambon
                          </li>
                        </ul>
                      </div>
                      
                      <div className="rounded-lg border-2 border-secondary bg-secondary/10 p-4 text-center">
                        <p className="text-3xl font-bold text-primary">{"10€"}</p>
                        <p className="text-sm text-muted-foreground">{"l'unite - Prix degressif a partir de 2"}</p>
                      </div>
                      
                      <Button asChild className="w-full bg-primary hover:bg-primary/90">
                        <a 
                          href="https://www.helloasso.com/associations/montreal-handball/evenements/vente-de-galette-pizza-tarte" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Commander en ligne sur HelloAsso
                        </a>
                      </Button>
                      
                      <p className="text-center text-sm text-muted-foreground">
                        Un petit plaisir pour vous, un grand soutien pour le club !
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-balance">
                Ne manquez aucune actualite
              </h2>
              <p className="mb-8 text-lg text-muted-foreground text-balance">
                Suivez-nous sur les reseaux sociaux pour rester informe en temps reel.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="#"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Suivre sur Facebook
                </a>
                <a
                  href="#"
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Suivre sur Instagram
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
