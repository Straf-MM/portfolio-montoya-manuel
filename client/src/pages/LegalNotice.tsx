import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function LegalNotice() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50 dark:to-slate-900 pt-20 pb-12">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Retour
          </button>
          <h1 className="text-4xl font-bold text-foreground mb-2">Mentions Légales</h1>
          <p className="text-muted-foreground">Informations légales et politique de confidentialité</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Informations générales */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Informations Générales</h2>
            <div className="space-y-3 text-card-foreground">
              <p>
                <strong>Nom :</strong> Manuel Montoya
              </p>
              <p>
                <strong>Adresse :</strong> Horbourg-Wihr 68180, France
              </p>
              <p>
                <strong>Email :</strong> pro.manuel.montoya@gmail.com
              </p>
              <p>
                <strong>Téléphone :</strong> 07 71 01 03 87
              </p>
              <p>
                <strong>Statut :</strong> Étudiant BTS SIO - Option SISR
              </p>
            </div>
          </section>

          {/* Responsable du site */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Responsable du Site</h2>
            <p className="text-card-foreground">
              Ce site est développé et maintenu par Manuel Montoya. Pour toute question concernant ce site, veuillez nous contacter via le formulaire de contact ou par email.
            </p>
          </section>

          {/* Hébergement */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Hébergement</h2>
            <div className="space-y-2 text-card-foreground">
              <p>
                <strong>Hébergeur :</strong> Vercel
              </p>
              <p>
                <strong>Adresse :</strong> 340 S Lemon Ave, Walnut, CA 91789, USA
              </p>
              <p>
                <strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://vercel.com</a>
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Propriété Intellectuelle</h2>
            <p className="text-card-foreground mb-4">
              Tous les contenus présents sur ce site (textes, images, vidéos, documents) sont la propriété exclusive de Manuel Montoya ou de ses partenaires autorisés. Toute reproduction, distribution ou utilisation sans autorisation préalable est strictement interdite.
            </p>
            <p className="text-card-foreground">
              Les projets et réalisations présentés sur ce site sont des travaux académiques réalisés dans le cadre de la formation BTS SIO.
            </p>
          </section>

          {/* Politique de confidentialité - RGPD */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Politique de Confidentialité (RGPD)</h2>
            
            <div className="space-y-4 text-card-foreground">
              <div>
                <h3 className="font-bold text-foreground mb-2">1. Collecte de Données</h3>
                <p>
                  Ce site collecte les données personnelles suivantes uniquement lorsque vous les fournissez volontairement via le formulaire de contact :
                </p>
                <ul className="list-disc list-inside mt-2 ml-2">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Message</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">2. Utilisation des Données</h3>
                <p>
                  Les données collectées sont utilisées exclusivement pour :
                </p>
                <ul className="list-disc list-inside mt-2 ml-2">
                  <li>Répondre à vos messages via le formulaire de contact</li>
                  <li>Vous contacter si nécessaire</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">3. Traitement des Données</h3>
                <p>
                  Les données sont traitées via <strong>Formspree</strong>, un service tiers conforme au RGPD. Formspree stocke vos données de manière sécurisée et ne les partage pas avec des tiers.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">4. Durée de Conservation</h3>
                <p>
                  Les données collectées via le formulaire de contact sont conservées aussi longtemps que nécessaire pour répondre à votre demande, puis supprimées.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">5. Vos Droits (RGPD)</h3>
                <p>
                  Conformément au RGPD, vous avez le droit de :
                </p>
                <ul className="list-disc list-inside mt-2 ml-2">
                  <li>Accéder à vos données personnelles</li>
                  <li>Corriger vos données</li>
                  <li>Supprimer vos données</li>
                  <li>Limiter le traitement de vos données</li>
                  <li>Vous opposer au traitement</li>
                  <li>Demander la portabilité de vos données</li>
                </ul>
                <p className="mt-2">
                  Pour exercer ces droits, contactez-nous via le formulaire de contact ou par email.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">6. Cookies</h3>
                <p>
                  Ce site n'utilise pas de cookies de suivi. Seuls les cookies techniques nécessaires au fonctionnement du site peuvent être utilisés.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">7. Sécurité</h3>
                <p>
                  Les données sont transmises via HTTPS (connexion sécurisée) et stockées de manière sécurisée par nos prestataires.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-2">8. Contact - Délégué à la Protection des Données</h3>
                <p>
                  Pour toute question concernant la protection de vos données ou pour exercer vos droits RGPD :
                </p>
                <p className="mt-2">
                  <strong>Email :</strong> pro.manuel.montoya@gmail.com
                </p>
              </div>
            </div>
          </section>

          {/* Limitation de responsabilité */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Limitation de Responsabilité</h2>
            <p className="text-card-foreground">
              Ce site est fourni "tel quel" sans garantie d'aucune sorte. Manuel Montoya ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site ou de ses contenus.
            </p>
          </section>

          {/* Modifications */}
          <section className="bg-card rounded-lg p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Modifications des Mentions Légales</h2>
            <p className="text-card-foreground">
              Ces mentions légales peuvent être modifiées à tout moment sans préavis. Les modifications entrent en vigueur dès leur publication sur le site.
            </p>
            <p className="text-muted-foreground mt-4 text-sm">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
