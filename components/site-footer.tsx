import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Club Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Montréal Handball</h3>
            <p className="text-sm text-muted-foreground">
              Club de handball passionné, accueillant tous les niveaux et tous les âges.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/club" className="text-muted-foreground hover:text-primary">
                  Le Club
                </Link>
              </li>
              <li>
                <Link href="/equipes" className="text-muted-foreground hover:text-primary">
                  Nos Équipes
                </Link>
              </li>
              <li>
                <Link href="/resultats" className="text-muted-foreground hover:text-primary">
                  Résultats
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="text-muted-foreground hover:text-primary">
                  Actualités
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@montrealhandball.fr" className="hover:text-primary">
                  contact@montrealhandball.fr
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+33620906643" className="hover:text-primary">06 20 90 66 43</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Montréal-la-Cluse, Ain</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Suivez-nous</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Montréal Handball. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
