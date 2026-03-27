'use client'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Construction, ShoppingBag, Bell } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

export default function BoutiquePage() {
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast({
        title: 'Inscription enregistrée !',
        description: 'Vous serez notifié dès l\'ouverture de la boutique.',
      })
      setEmail('')
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl text-balance">
                Boutique Officielle
              </h1>
              <p className="text-lg text-primary-foreground/90 text-balance">
                Tous les produits officiels du Montréal Handball
              </p>
            </div>
          </div>
        </section>

        {/* Under Construction Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="mx-auto max-w-2xl border-2 border-dashed border-secondary">
              <CardContent className="flex flex-col items-center p-12 text-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-secondary/20">
                  <Construction className="h-12 w-12 text-secondary" />
                </div>
                
                <h2 className="mb-4 text-3xl font-bold text-foreground">
                  Boutique en cours de construction
                </h2>
                
                <p className="mb-6 text-lg text-muted-foreground leading-relaxed max-w-md">
                  Nous travaillons actuellement sur notre boutique en ligne. 
                  Nous attendons les photos de nos photographes pour vous proposer 
                  les meilleurs produits du club.
                </p>

                <div className="mb-8 flex items-center gap-2 rounded-lg bg-muted px-4 py-2">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Ouverture prochainement
                  </span>
                </div>

                {/* Email Notification Form */}
                <div className="w-full max-w-md">
                  <p className="mb-4 text-sm font-medium text-foreground">
                    Soyez informé de l&apos;ouverture de la boutique :
                  </p>
                  <form onSubmit={handleNotify} className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 rounded-md border border-input bg-background px-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    />
                    <Button type="submit" className="gap-2">
                      <Bell className="h-4 w-4" />
                      Me notifier
                    </Button>
                  </form>
                </div>

                <div className="mt-8 pt-8 border-t border-border w-full">
                  <p className="text-sm text-muted-foreground mb-4">
                    En attendant, découvrez notre club :
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="outline" asChild>
                      <Link href="/equipes">Nos équipes</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/actualites">Actualités</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/contact">Nous contacter</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Preview Section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="mb-4 text-2xl font-bold">
                Bientôt disponibles
              </h3>
              <p className="mb-8 text-muted-foreground">
                Maillots officiels, équipements, accessoires et bien plus encore aux couleurs du Montréal Handball.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Maillots', 'Shorts', 'Sweats', 'Accessoires'].map((category) => (
                  <div 
                    key={category}
                    className="rounded-lg border-2 border-dashed border-border bg-background p-6 text-center"
                  >
                    <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                      <ShoppingBag className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">{category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
