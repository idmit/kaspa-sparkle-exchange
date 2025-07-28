import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Users, TrendingUp, Shield, Globe, Clock } from "lucide-react";

const AboutKaspa = () => {
  const features = [
    {
      icon: Zap,
      title: "Самая быстрая",
      description: "Kaspa обрабатывает транзакции быстрее любой другой криптовалюты"
    },
    {
      icon: Shield,
      title: "Максимальная безопасность",
      description: "Криптографическая защита и децентрализованная архитектура"
    },
    {
      icon: Globe,
      title: "Глобальная доступность",
      description: "Торгуйте в любой точке мира без ограничений"
    },
    {
      icon: Clock,
      title: "Мгновенные расчеты",
      description: "Получайте средства моментально после продажи"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Почему именно <span className="bg-gradient-primary bg-clip-text text-transparent">Kaspa?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kaspa - это революционная криптовалюта, которая решает проблемы скорости и масштабируемости 
            традиционных блокчейнов.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Технология будущего</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Kaspa использует уникальную архитектуру GHOSTDAG, которая позволяет обрабатывать 
              множество блоков параллельно, достигая невероятной скорости транзакций.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-kaspa-primary rounded-full"></div>
                <span>Более 1000 транзакций в секунду</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-kaspa-primary rounded-full"></div>
                <span>Минимальные комиссии</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-kaspa-primary rounded-full"></div>
                <span>Полная децентрализация</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-kaspa-primary rounded-full"></div>
                <span>Экологически чистый майнинг</span>
              </div>
            </div>
            <Button variant="crypto" size="lg">
              Изучить технологию
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-secondary p-8 rounded-2xl shadow-card">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-crypto-gold mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">+2,847%</div>
                  <div className="text-sm text-muted-foreground">Рост за год</div>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-kaspa-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">500K+</div>
                  <div className="text-sm text-muted-foreground">Активных пользователей</div>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">0.1s</div>
                  <div className="text-sm text-muted-foreground">Время подтверждения</div>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-crypto-blue mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Время работы</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-kaspa-primary/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <feature.icon className="w-12 h-12 text-kaspa-primary mx-auto mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutKaspa;