import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Code,
  Database,
  Shield,
  Briefcase,
  BookOpen,
  Mail,
  ArrowRight,
} from "lucide-react";
import { manuelData } from "@/data/manuel-data";

export default function Home() {
  const skills = [
    {
      icon: Code,
      title: "Développement",
      description: "Web, Mobile, Desktop",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Database,
      title: "Base de données",
      description: "SQL, NoSQL, Administration",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Sécurité réseau, Protection des données",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:py-40 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10" />

        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              Bienvenue 👋
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Manuel Montoya
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Étudiant en BTS SIO
          </p>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Services Informatiques aux Organisations - Option SISR
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link href="/stages">
              <Button size="lg" className="gap-2 group">
                <Briefcase className="w-4 h-4" />
                Découvrir mes stages
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="gap-2">
                <Mail className="w-4 h-4" />
                Me contacter
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">2</p>
              <p className="text-sm text-muted-foreground">Stages</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">6</p>
              <p className="text-sm text-muted-foreground">Pages</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Compétences</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-card border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-background rounded-2xl p-8 md:p-12 border border-border">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              À propos de moi
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>{manuelData.about.intro}</p>
              <p>{manuelData.about.passion}</p>
              <p>{manuelData.about.portfolio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mes compétences principales
            </h2>
            <p className="text-lg text-muted-foreground">
              Domaines d'expertise développés durant ma formation BTS SIO
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={index}
                  className="p-8 border border-border hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {skill.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Studies Section */}
      <section className="py-16 px-4 bg-card border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Mon parcours BTS SIO
          </h2>

          <Card className="p-8 md:p-12 border border-border bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="flex items-start gap-4 mb-4">
              <BookOpen className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  BTS SIO - Option SISR
                </h3>
                <p className="text-muted-foreground mb-4">
                  2023 - 2025 (en cours)
                </p>
                <p className="text-foreground leading-relaxed">
                  Formation complète en informatique couvrant le développement
                  d'applications, l'administration des systèmes et réseaux, la
                  gestion de bases de données, et la cybersécurité. Cette
                  formation allie théorie et pratique avec des projets concrets
                  et des périodes de stage en entreprise.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 border border-border text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explorez mon travail
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Découvrez mes projets, mes expériences en stage et ma veille
              technologique
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/stages">
                <Button size="lg" variant="outline" className="gap-2">
                  <Briefcase className="w-4 h-4" />
                  Mes Stages
                </Button>
              </Link>
              <Link href="/bts-sio">
                <Button size="lg" variant="outline" className="gap-2">
                  <BookOpen className="w-4 h-4" />
                  BTS SIO
                </Button>
              </Link>
              <Link href="/veille">
                <Button size="lg" variant="outline" className="gap-2">
                  <Shield className="w-4 h-4" />
                  Veille Technologique
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
