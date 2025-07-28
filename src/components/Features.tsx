import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Shield, Globe, Users, TrendingUp } from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: Zap,
      title: "Молниеносные транзакции",
      description: "Обработка транзакций менее чем за секунду благодаря революционной технологии GHOSTDAG",
      highlight: "< 1 сек"
    },
    {
      icon: Shield,
      title: "Максимальная безопасность",
      description: "Военная криптография и полная децентрализация обеспечивают непревзойденную защиту",
      highlight: "100% безопасно"
    },
    {
      icon: TrendingUp,
      title: "Низкие комиссии",
      description: "Минимальные комиссии за транзакции делают Kaspa идеальным для микроплатежей",
      highlight: "0.01%"
    }
  ];

  const benefits = [
    "Круглосуточная техподдержка на русском языке",
    "Мгновенное пополнение и вывод средств",
    "Интуитивно понятный интерфейс",
    "Мобильное приложение для iOS и Android",
    "API для профессиональных трейдеров",
    "Страхование депозитов до $100,000"
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Уникальные <span className="bg-gradient-primary bg-clip-text text-transparent">возможности</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Передовые технологии и инновационные решения для комфортной торговли криптовалютой
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="relative bg-card/50 backdrop-blur-sm border-border/50 hover:border-kaspa-primary/50 transition-all duration-500 hover:scale-105 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:animate-pulse-glow">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <Badge className="absolute -top-2 -right-2 bg-kaspa-primary text-primary-foreground">
                    {feature.highlight}
                  </Badge>
                </div>
                <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Преимущества нашей платформы</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <CheckCircle className="w-5 h-5 text-kaspa-primary group-hover:scale-110 transition-transform" />
                  <span className="text-foreground group-hover:text-kaspa-primary transition-colors">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-secondary p-8 rounded-2xl shadow-card">
              <h4 className="text-2xl font-bold mb-6 text-center">Статистика платформы</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Globe className="w-8 h-8 text-crypto-blue mx-auto mb-2" />
                  <div className="text-xl font-bold text-foreground mb-1">150+</div>
                  <div className="text-sm text-muted-foreground">Стран мира</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-kaspa-primary mx-auto mb-2" />
                  <div className="text-xl font-bold text-foreground mb-1">1M+</div>
                  <div className="text-sm text-muted-foreground">Пользователей</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-crypto-gold mx-auto mb-2" />
                  <div className="text-xl font-bold text-foreground mb-1">$2.5B</div>
                  <div className="text-sm text-muted-foreground">Объем торгов</div>
                </div>
                <div className="text-center">
                  <Zap className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-xl font-bold text-foreground mb-1">99.9%</div>
                  <div className="text-sm text-muted-foreground">Время работы</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;