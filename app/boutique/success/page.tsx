'use client'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'
import { clearCart } from '@/lib/cart'

export default function SuccessPage() {
  useEffect(() => {
    // Clear cart after successful payment
    clearCart()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <CheckCircle className="mx-auto mb-6 h-20 w-20 text-green-600" />
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">
              Commande confirmée !
            </h1>
            <p className="mb-8 text-lg text-muted-foreground text-balance">
              Merci pour votre commande. Vous recevrez un email de confirmation avec tous les détails.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/">Retour à l'accueil</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/boutique">Continuer mes achats</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
