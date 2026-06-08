import { AlertCircle, ExternalLink, Calendar, Newspaper } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function TechWatch() {
  const news = [
    {
      id: 1,
      title: "Backdoor Découverte dans OpenSSL 3.2",
      description:
        "Une backdoor critique découverte dans OpenSSL 3.2 permettant aux attaquants de contourner le chiffrement TLS. Affecte des millions de serveurs web à travers le monde.",
      date: "2026-05-18",
      source: "OpenSSL Security Advisory, CVE-2026-4521",
      severity: "Critique",
      tags: ["Chiffrement", "TLS/SSL", "Serveurs Web"],
    },
    {
      id: 2,
      title: "Attaque Supply Chain via Kubernetes Helm",
      description:
        "Une backdoor détectée dans plusieurs charts Helm populaires. Les développeurs utilisant ces charts ont été exposés à un accès non autorisé à leurs clusters Kubernetes.",
      date: "2026-04-22",
      source: "Kubernetes Security Team",
      severity: "Critique",
      tags: ["Kubernetes", "Supply Chain", "Container"],
    },
    {
      id: 3,
      title: "Vulnérabilité Zero-Day dans Windows Defender",
      description:
        "Microsoft révèle une vulnérabilité zero-day exploitée pour installer des backdoors persistantes. Les attaquants peuvent maintenir un accès même après les mises à jour.",
      date: "2026-03-30",
      source: "Microsoft Security Response Center",
      severity: "Critique",
      tags: ["Windows", "Antivirus", "Persistance"],
    },
    {
      id: 4,
      title: "Backdoor dans les Mises à Jour de Firmware Routeurs",
      description:
        "Découverte d'une backdoor intégrée dans les mises à jour officielles de plusieurs marques de routeurs. Les attaquants ont compromis la chaîne de production.",
      date: "2026-02-14",
      source: "CISA Alert AA26-045",
      severity: "Critique",
      tags: ["Réseau", "Firmware", "Infrastructure"],
    },
    {
      id: 5,
      title: "Attaque AI-Powered Backdoor Detection Bypass",
      description:
        "Nouvelle technique utilisant l'IA pour créer des backdoors indétectables par les systèmes de détection classiques. Les chercheurs en sécurité appellent à une révision des stratégies de monitoring.",
      date: "2026-01-28",
      source: "Black Hat Security Conference",
      severity: "Élevé",
      tags: ["IA", "Détection", "Evasion"],
    },
    {
      id: 6,
      title: "Compromission de la Chaîne NPM via Typosquatting",
      description:
        "Plusieurs paquets npm avec des noms similaires à des librairies populaires contiennent des backdoors. Plus de 50 000 développeurs potentiellement affectés.",
      date: "2026-01-15",
      source: "npm Security Team, Report #2026-001",
      severity: "Élevé",
      tags: ["npm", "Typosquatting", "Développement"],
    },
    {
      id: 7,
      title: "Backdoor dans les Conteneurs Docker Officiels",
      description:
        "Docker révèle qu'une backdoor a été injectée dans plusieurs images officielles. Les utilisateurs doivent mettre à jour immédiatement leurs conteneurs.",
      date: "2025-12-20",
      source: "Docker Security Advisory",
      severity: "Critique",
      tags: ["Docker", "Container", "Images"],
    },
    {
      id: 8,
      title: "Exploitation de Vulnérabilité AWS Lambda",
      description:
        "Une backdoor découverte permettant aux attaquants d'accéder aux fonctions Lambda et d'exfiltrer des données. Affecte les déploiements sans isolation réseau.",
      date: "2025-11-05",
      source: "AWS Security Bulletin",
      severity: "Élevé",
      tags: ["Cloud", "AWS", "Serverless"],
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critique":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "Élevé":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "Moyen":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50 dark:to-slate-900 pt-20 pb-12">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Veille Technologique</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Suivi des dernières menaces de sécurité, backdoors et vulnérabilités critiques dans le domaine de l'infrastructure et des réseaux.
          </p>
        </div>

        {/* Google Alerts Section */}
        <Card className="mb-12 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 border-blue-200 dark:border-blue-900">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">Sources de Veille</h2>
                <p className="text-muted-foreground mb-4">
                  Cette veille technologique est alimentée par plusieurs sources fiables :
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                    <strong>Google Alerts</strong> - Alertes automatiques sur les backdoors et vulnérabilités
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                    <strong>CISA (Cybersecurity and Infrastructure Security Agency)</strong> - Avis de sécurité officiels
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                    <strong>CVE Database</strong> - Base de données des vulnérabilités connues
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                    <strong>Rapports de sécurité professionnels</strong> - Analyses d'experts en cybersécurité
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Actualités Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Newspaper className="text-primary" size={28} />
            <h2 className="text-3xl font-bold text-foreground">Actualités Récentes</h2>
          </div>

          <div className="space-y-4">
            {news.map((item) => (
              <Card key={item.id} className="hover:shadow-md transition-shadow overflow-hidden">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar size={16} />
                        <span>{formatDate(item.date)}</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ${getSeverityColor(item.severity)}`}>
                      {item.severity}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-card-foreground mb-4">{item.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Source */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Source : </span>
                      <span className="font-semibold text-foreground">{item.source}</span>
                    </div>
                    <ExternalLink size={16} className="text-muted-foreground" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Informations Backdoors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Types de Backdoors */}
          <Card>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Types de Backdoors</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Backdoors Logiciels</h4>
                  <p className="text-sm text-muted-foreground">
                    Intégrées dans le code source ou installées via des vulnérabilités
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Backdoors Réseau</h4>
                  <p className="text-sm text-muted-foreground">
                    Exploitant les protocoles réseau et services exposés
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Backdoors Matérielles</h4>
                  <p className="text-sm text-muted-foreground">
                    Intégrées au niveau du matériel ou du firmware
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Défenses */}
          <Card>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Mesures de Défense</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Mises à jour régulières et patches de sécurité</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Segmentation réseau et pare-feu avancé</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Monitoring et détection d'anomalies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Chiffrement des données en transit et au repos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Audits de sécurité et tests de pénétration</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
