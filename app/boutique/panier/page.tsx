'use client'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { getCart, updateQuantity, removeFromCart } from '@/lib/cart'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function PanierPage() {
  const [cart, setCart] = useState(getCart())
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleCartUpdate = () => {
      setCart(getCart())
    }

    window.addEventListener('cartUpdated', handleCartUpdate)
    return () => window.removeEventListener('cartUpdated', handleCartUpdate)
  }, [])

  const handleCheckout = async () => {
    setIsLoading(true)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart.items,
        }),
      })

      const { url } = await response.json()
      
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('[v0] Checkout error:', error)
      alert('Erreur lors du paiement. Veuillez réessayer.')
    } finally {
      setIsLoading(false)
    }
  }

  if (cart.items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        
        <main className="flex-1">
          <div className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-2xl text-center">
              <ShoppingBag className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
              <h1 className="mb-4 text-3xl font-bold">Votre panier est vide</h1>
              <p className="mb-8 text-lg text-muted-foreground">
                Découvrez nos produits officiels dans la boutique
              </p>
              <Button size="lg" asChild>
                <Link href="/boutique">Voir la boutique</Link>
              </Button>
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/80 py-12 text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold md:text-4xl">Mon Panier</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {cart.items.map((item) => (
                    <Card key={`${item.id}-${item.size}`}>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex flex-1 flex-col justify-between">
                            <div>
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="font-semibold">{item.name}</h3>
                                  {item.size && (
                                    <p className="text-sm text-muted-foreground">
                                      Taille: {item.size}
                                    </p>
                                  )}
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeFromCart(item.id, item.size)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1, item.size)
                                  }
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-8 text-center font-medium">
                                  {item.quantity}
                                </span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1, item.size)
                                  }
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                              <p className="text-lg font-bold">
                                {(item.price * item.quantity).toFixed(2)}€
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Résumé de la commande</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Sous-total</span>
                      <span className="font-medium">{cart.total.toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Livraison</span>
                      <span className="font-medium">Gratuite</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-lg font-bold text-primary">
                          {cart.total.toFixed(2)}€
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <Button
                      className="w-full"
                      size="lg"
                      onClick={handleCheckout}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Chargement...' : 'Procéder au paiement'}
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/boutique">Continuer mes achats</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
