import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Sparkles, Users, Target, TrendingUp } from "lucide-react";
import mascot from "@/assets/mascot.png";
import logo from "@/assets/logo-new.png";

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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cacau-purple/10 via-background to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cacau-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cacau-purple/10 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col items-center text-center space-y-12 md:space-y-16">
          
          {/* Logo */}
          <div className="animate-slide-down">
            <img 
              src={logo} 
              alt="Cacau Creators" 
              className="h-20 md:h-28 w-auto"
            />
          </div>

          {/* Hero Section */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-cacau-purple to-cacau-green rounded-lg blur opacity-30" />
              <h1 className="relative text-6xl md:text-8xl font-black text-cacau-purple-dark tracking-tight">
                Em Breve
              </h1>
            </div>
            
            <div className="relative max-w-3xl mx-auto">
              <img 
                src={mascot} 
                alt="Mascote Cacau" 
                className="w-32 h-32 md:w-40 md:h-40 mx-auto animate-float"
              />
            </div>

            <h2 className="text-2xl md:text-4xl font-semibold text-cacau-purple max-w-4xl">
              Sua plataforma all-in-one para criar, monetizar e crescer.
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Estamos desenvolvendo uma solução completa para criadores de conteúdo brasileiros. 
              Prepare-se para transformar sua presença digital.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="group relative bg-card rounded-3xl p-8 border-2 border-border hover:border-cacau-green transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(139,183,75,0.3)]">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-cacau-purple/10 rounded-full blur-2xl group-hover:bg-cacau-green/20 transition-all" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-cacau-purple to-cacau-purple-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-cacau-purple-dark">Cacau Links</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Links inteligentes com analytics avançados e personalização que se adaptam ao seu público.
                </p>
              </div>
            </div>

            <div className="group relative bg-card rounded-3xl p-8 border-2 border-border hover:border-cacau-purple transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(107,63,78,0.3)]">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-cacau-green/10 rounded-full blur-2xl group-hover:bg-cacau-purple/20 transition-all" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-cacau-green to-cacau-green-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-cacau-purple-dark">Cacau Comunidade</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sistema completo de assinaturas e comunidade integrada para engajar seus fãs.
                </p>
              </div>
            </div>

            <div className="group relative bg-card rounded-3xl p-8 border-2 border-border hover:border-cacau-green transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(139,183,75,0.3)]">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-cacau-purple/10 rounded-full blur-2xl group-hover:bg-cacau-green/20 transition-all" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-cacau-purple to-cacau-purple-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-cacau-purple-dark">Cacau Metas</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Financiamento coletivo transparente para realizar seus projetos criativos.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 w-full max-w-3xl py-8 animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-cacau-purple mb-2">100%</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">Brasileiro</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-cacau-green mb-2">All-in-One</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">Plataforma</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-cacau-purple" />
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">Crescimento</div>
            </div>
          </div>

          {/* Email Signup */}
          <div className="w-full max-w-lg animate-slide-up" style={{ animationDelay: "0.7s" }}>
            <div className="relative bg-gradient-to-br from-cacau-purple to-cacau-purple-dark rounded-3xl p-10 shadow-[0_20px_60px_-15px_rgba(107,63,78,0.4)]">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-cacau-green to-cacau-purple rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
              <div className="relative">
                <div className="flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-cacau-green animate-glow" />
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white">Seja o primeiro!</h3>
                <p className="text-cacau-cream/80 mb-8 text-lg">
                  Receba acesso antecipado e atualizações exclusivas.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-14 text-base bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 transition-colors"
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-14 text-base font-bold bg-cacau-green hover:bg-cacau-green-dark text-cacau-purple-dark transition-all hover:scale-[1.02] shadow-lg"
                  >
                    Garantir Meu Acesso
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <p className="text-muted-foreground text-sm">
              © 2025 Cacau Creators. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
