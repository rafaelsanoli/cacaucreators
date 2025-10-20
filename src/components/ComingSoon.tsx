import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import logo from "@/assets/logo.png";

export const ComingSoon = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Obrigado! Você será notificado quando lançarmos! 🎉");
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-cacau-light/30">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          {/* Logo with animation */}
          <div className="animate-fade-in">
            <img 
              src={logo} 
              alt="Cacau Creators" 
              className="w-48 h-48 md:w-64 md:h-64 animate-pulse-slow"
            />
          </div>

          {/* Main Heading */}
          <div className="space-y-4 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Em Breve
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Cacau Creators
            </h2>
          </div>


          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-slide-up" style={{ animationDelay: "0.3s" }}>
            Estamos preparando algo especial para criadores de conteúdo brasileiros.
            Uma plataforma completa que une presença digital, monetização e comunidade em um só lugar.
          </p>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl mt-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold mb-2 text-primary">Cacau Links</h3>
              <p className="text-muted-foreground">
                Links inteligentes que se adaptam ao desempenho e fornecem insights valiosos sobre seu público.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2 text-primary">Cacau Comunidade</h3>
              <p className="text-muted-foreground">
                Sistema completo de assinaturas e comunidade integrada para seus fãs mais engajados.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2 text-primary">Cacau Metas</h3>
              <p className="text-muted-foreground">
                Financiamento coletivo transparente para realizar seus projetos com apoio da sua comunidade.
              </p>
            </div>
          </div>

          {/* Email Signup */}
          <div className="w-full max-w-md mt-12 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
              <h3 className="text-2xl font-bold mb-4">Seja o primeiro a saber!</h3>
              <p className="text-muted-foreground mb-6">
                Cadastre-se para receber atualizações e ter acesso antecipado quando lançarmos.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 text-base"
                />
                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                >
                  Quero ser notificado
                </Button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <p>© 2025 Cacau Creators. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
