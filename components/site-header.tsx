"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, X, Lock } from "lucide-react"
import { useState, useEffect } from "react"
import { getCart } from "@/lib/cart"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartItemCount, setCartItemCount] = useState(0)

  useEffect(() => {
    const updateCartCount = () => {
      const cart = getCart()
      const count = cart.items.reduce((sum, item) => sum + item.quantity, 0)
      setCartItemCount(count)
    }

    updateCartCount()
    window.addEventListener("cartUpdated", updateCartCount)
    return () => window.removeEventListener("cartUpdated", updateCartCount)
  }, [])

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "Le Club", href: "/club" },
    { name: "Équipes", href: "/equipes" },
    { name: "Résultats", href: "/resultats" },
    { name: "Actualités", href: "/actualites" },
    { name: "Boutique", href: "/boutique" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img 
            src="/logo-montreal-handball.png" 
            alt="Montréal Handball" 
            className="h-12 w-auto"
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-lg font-bold leading-tight text-primary">Montréal</span>
            <span className="text-sm font-semibold leading-tight text-secondary">Handball</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Cart Button */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="hidden md:flex">
            <Link href="/admin">
              <Lock className="h-4 w-4" />
              <span className="sr-only">Administration</span>
            </Link>
          </Button>

          <Button variant="outline" size="icon" asChild className="hidden md:flex relative bg-transparent">
            <Link href="/boutique/panier">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                  {cartItemCount}
                </span>
              )}
              <span className="sr-only">Panier</span>
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/admin"
              className="text-base font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Administration
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
