import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Trophy, Users, Calendar, ShoppingBag } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Section with Background Image */}
        <section className="relative overflow-hidden py-24 md:py-40">
          {/* Background Image with Blur */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/background-hero.jpg)' }}
          >
            <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm" />
          </div>
          
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              {/* Logo */}
              <img 
                src="/logo-montreal-handball.png" 
                alt="Montréal Handball" 
                className="mx-auto mb-8 h-32 w-auto md:h-40 drop-shadow-2xl rounded-2xl"
              />
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl text-balance drop-shadow-lg">
                Bienvenue au Montréal Handball
              </h1>
              <p className="mb-8 text-lg text-white/90 md:text-xl text-balance drop-shadow">
                Rejoignez notre club passionné et découvrez le handball dans une ambiance conviviale et compétitive.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold" asChild>
                  <Link href="/contact">Nous rejoindre</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm" asChild>
                  <Link href="/equipes">Nos équipes</Link>
                </Button>
              </div>
            </div>
          </div>
          {/* Decorative Element */}
          <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Résultats</h3>
                  <p className="text-sm text-muted-foreground">
                    Suivez les performances de toutes nos équipes en temps réel
                  </p>
                  <Button variant="link" asChild className="mt-4">
                    <Link href="/resultats">Voir les résultats</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Nos Équipes</h3>
                  <p className="text-sm text-muted-foreground">
                    Découvrez nos différentes catégories, du mini-hand aux seniors
                  </p>
                  <Button variant="link" asChild className="mt-4">
                    <Link href="/equipes">Voir les équipes</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Actualités</h3>
                  <p className="text-sm text-muted-foreground">
                    Restez informés des dernières nouvelles du club
                  </p>
                  <Button variant="link" asChild className="mt-4">
                    <Link href="/actualites">Lire les news</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-secondary hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                    <ShoppingBag className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Boutique</h3>
                  <p className="text-sm text-muted-foreground">
                    Commandez vos produits officiels du club en ligne
                  </p>
                  <Button variant="link" asChild className="mt-4">
                    <Link href="/boutique">Voir la boutique</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl text-balance">
                Prêt à rejoindre l'aventure ?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground text-balance">
                Que vous soyez débutant ou confirmé, nous avons une place pour vous dans notre club.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Contactez-nous</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
