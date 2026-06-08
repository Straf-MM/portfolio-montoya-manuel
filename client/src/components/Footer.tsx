import { Link } from "wouter";
import { Github, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-foreground mb-3">À Propos</h3>
            <p className="text-sm text-muted-foreground">
              Portfolio de Manuel Montoya, étudiant BTS SIO - Option SISR. Découvrez mes projets, stages et compétences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-3">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-primary hover:underline">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/bts-sio" className="text-primary hover:underline">
                  BTS SIO
                </Link>
              </li>
              <li>
                <Link href="/stages" className="text-primary hover:underline">
                  Stages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-3">Contact</h3>
            <div className="flex gap-4">
              <a
                href="mailto:pro.manuel.montoya@gmail.com"
                className="text-primary hover:text-primary/80 transition-colors"
                title="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/Straf-MM"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
                title="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2025 Manuel Montoya. Tous droits réservés.</p>
            <Link href="/mentions-legales" className="text-primary hover:underline">
              Mentions Légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
