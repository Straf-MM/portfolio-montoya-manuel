import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Server,
  Shield,
  Zap,
  Github,
  Mail,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { manuelData } from "@/data/manuel-data";
import ShootingStars from "@/components/ShootingStars";

export default function Home() {
  const skills = [
    { icon: Server, label: "Infrastructure", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, label: "Sécurité", color: "from-purple-500 to-pink-500" },
    { icon: Code2, label: "Virtualisation", color: "from-green-500 to-emerald-500" },
    { icon: Zap, label: "Gestion de Configuration", color: "from-orange-500 to-red-500" },
  ];

  const achievements = [
    { number: "2", label: "Stages professionnels" },
    { number: "5+", label: "Projets réalisés" },
    { number: "10+", label: "Technologies maîtrisées" },
    { number: "100%", label: "Engagement" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ShootingStars />
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto max-w-5xl">
          {/* Main Hero */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                👋 Bienvenue sur mon portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Manuel <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Montoya</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Étudiant BTS SIO - Option SISR | Passionné par l'infrastructure et la sécurité informatique
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button size="lg" className="gap-2 group">
                  Me contacter
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="https://github.com/Straf-MM" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <p className="text-sm text-muted-foreground">{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-card/50 border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Domaines de compétences</h2>
            <p className="text-muted-foreground text-lg">
              Mes spécialités développées au cours de ma formation BTS SIO
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${skill.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{skill.label}</h3>
                  <p className="text-sm text-muted-foreground">
                    Expertise en {skill.label.toLowerCase()}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Stages */}
            <Link href="/stages">
              <Card className="h-full p-8 cursor-pointer group border-2 border-transparent hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:bg-primary/5">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Stages</h3>
                <p className="text-muted-foreground mb-4">
                  Découvrez mes expériences professionnelles chez Liebherr Mining
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  Voir les stages <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>

            {/* Compétences E4 */}
            <Link href="/competences">
              <Card className="h-full p-8 cursor-pointer group border-2 border-transparent hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:bg-primary/5">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                    <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Compétences E4</h3>
                <p className="text-muted-foreground mb-4">
                  Tableau synthétique des compétences acquises en BTS SIO
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  Voir les compétences <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>

            {/* Veille Technologique */}
            <Link href="/veille">
              <Card className="h-full p-8 cursor-pointer group border-2 border-transparent hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:bg-primary/5">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
                    <Shield className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Veille Technologique</h3>
                <p className="text-muted-foreground mb-4">
                  Analyse des backdoors et vulnérabilités informatiques
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  Lire l'article <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-card/50 border-y border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">À propos de moi</h2>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                Je suis passionné par l'informatique et les nouvelles technologies. Ma formation en BTS SIO m'a permis de développer des compétences solides en infrastructure, systèmes et réseaux.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Je suis actuellement en deuxième année de BTS SIO, option SISR, et je mets tout en œuvre pour devenir un professionnel compétent dans le domaine de l'infrastructure et de la sécurité informatique.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-all">
                <h4 className="font-semibold text-foreground mb-2">📍 Localisation</h4>
                <p className="text-muted-foreground">{manuelData.personal.city}</p>
              </div>
              <div className="p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-all">
                <h4 className="font-semibold text-foreground mb-2">🎓 Formation</h4>
                <p className="text-muted-foreground">{manuelData.personal.formation}</p>
              </div>
              <div className="p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-all">
                <h4 className="font-semibold text-foreground mb-2">💼 Spécialité</h4>
                <p className="text-muted-foreground">SISR - Solutions d'Infrastructures, Systèmes et Réseaux</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Intéressé par mon profil ?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de mes projets ou pour une collaboration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                <Mail className="w-4 h-4" />
                Envoyer un message
              </Button>
            </Link>
            <a href="https://github.com/Straf-MM" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2">
                <Github className="w-4 h-4" />
                Voir mon GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
