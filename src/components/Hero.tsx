import { Button } from "@/components/ui/button";
import { TrendingUp, Zap, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Floating Icons */}
          <div className="absolute -top-20 -left-20 text-kaspa-primary/20 animate-float">
            <TrendingUp size={80} />
          </div>
          <div className="absolute -top-10 -right-20 text-accent/20 animate-float" style={{ animationDelay: '2s' }}>
            <Zap size={60} />
          </div>
          <div className="absolute -bottom-10 -left-10 text-crypto-blue/20 animate-float" style={{ animationDelay: '4s' }}>
            <Shield size={70} />
          </div>

          {/* Main Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Торгуйте </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Kaspa</span>
              <br />
              <span className="text-foreground">с уверенностью</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Самая быстрая и безопасная платформа для покупки и продажи криптовалюты Kaspa. 
              Низкие комиссии, мгновенные транзакции.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button variant="crypto" size="xl" className="w-full sm:w-auto">
                Купить Kaspa сейчас
              </Button>
              <Button variant="crypto-outline" size="xl" className="w-full sm:w-auto">
                Узнать больше
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50">
                <div className="text-3xl font-bold text-kaspa-primary mb-2">0.01%</div>
                <div className="text-muted-foreground">Минимальная комиссия</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50">
                <div className="text-3xl font-bold text-kaspa-primary mb-2">&lt;1сек</div>
                <div className="text-muted-foreground">Время транзакции</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50">
                <div className="text-3xl font-bold text-kaspa-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Круглосуточная поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;