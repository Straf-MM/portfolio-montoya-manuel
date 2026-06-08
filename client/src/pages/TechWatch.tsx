import { AlertCircle, ExternalLink, Calendar, Newspaper } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function TechWatch() {
  const news = [
    {
      id: 1,
      title: "XZ Utils Backdoor Discovery",
      description:
        "Une backdoor critique découverte dans XZ Utils (librairie de compression). L'attaquant a inséré du code malveillant permettant un accès non autorisé aux systèmes Linux.",
      date: "2024-03-29",
      source: "CISA, CVE-2024-3156",
      severity: "Critique",
      tags: ["Linux", "Open Source", "Backdoor"],
    },
    {
      id: 2,
      title: "MOVEit Transfer Vulnerability",
      description:
        "Vulnérabilité zero-day exploitée dans MOVEit Transfer. Les attaquants utilisent cette faille pour installer des backdoors et accéder aux données sensibles des entreprises.",
      date: "2024-03-15",
      source: "Rapid7, CVE-2024-4956",
      severity: "Critique",
      tags: ["Transfert de fichiers", "Enterprise", "Exploitation"],
    },
    {
      id: 3,
      title: "Cisco IOS XE Backdoor",
      description:
        "Découverte d'une backdoor dans Cisco IOS XE permettant aux attaquants de contourner l'authentification. Affecte des milliers de routeurs dans le monde.",
      date: "2024-02-28",
      source: "Cisco Security Advisory",
      severity: "Critique",
      tags: ["Réseau", "Routeurs", "Authentification"],
    },
    {
      id: 4,
      title: "Supply Chain Attack via npm Package",
      description:
        "Un paquet npm populaire compromis avec une backdoor. Les développeurs utilisant ce paquet ont été exposés à un vol de credentials et d'accès SSH.",
      date: "2024-02-10",
      source: "npm Security Team",
      severity: "Élevé",
      tags: ["npm", "Supply Chain", "Développement"],
    },
    {
      id: 5,
      title: "Windows SYSTEM Privilege Escalation",
      description:
        "Nouvelle technique de backdoor permettant une escalade de privilèges sur Windows. Utilisée dans des attaques ciblées contre les entreprises.",
      date: "2024-01-25",
      source: "Microsoft Security Response Center",
      severity: "Élevé",
      tags: ["Windows", "Privilege Escalation", "Malware"],
    },
    {
      id: 6,
      title: "Kubernetes API Backdoor",
      description:
        "Découverte d'une backdoor dans les clusters Kubernetes permettant une persistance d'accès. Les attaquants peuvent maintenir un accès même après la suppression de pods.",
      date: "2024-01-10",
      source: "Kubernetes Security Advisory",
      severity: "Élevé",
      tags: ["Kubernetes", "Container", "Cloud"],
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
