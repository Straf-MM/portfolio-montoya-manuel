import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { ChevronRight } from "lucide-react";

export default function Stages() {
  const [, navigate] = useLocation();

  const stages = [
    {
      id: 1,
      title: "Stage 1ère Année",
      company: "Liebherr Mining",
      location: "Colmar",
      period: "Semaines 1-5",
      description: "Première expérience professionnelle chez Liebherr Mining à Colmar",
      route: "/stage1",
    },
    {
      id: 2,
      title: "Stage 2ème Année",
      company: "Liebherr Mining",
      location: "Colmar",
      period: "Semaines 1-5",
      description: "Deuxième stage professionnel chez Liebherr Mining à Colmar",
      route: "/stage2",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50 dark:to-slate-900 pt-20 pb-12">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Mes Stages</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Découvrez mes expériences professionnelles et les missions réalisées lors de mes stages en entreprise.
          </p>
        </div>

        {/* Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stages.map((stage) => (
            <Card
              key={stage.id}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => navigate(stage.route)}
            >
              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-foreground mb-2">{stage.title}</h2>
                  <p className="text-primary font-semibold">{stage.company}</p>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <p>
                    <strong>Lieu :</strong> {stage.location}
                  </p>
                  <p>
                    <strong>Période :</strong> {stage.period}
                  </p>
                </div>

                {/* Description */}
                <p className="text-card-foreground mb-6">{stage.description}</p>

                {/* Button */}
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(stage.route);
                  }}
                  className="w-full group/btn"
                >
                  Voir Détails
                  <ChevronRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
