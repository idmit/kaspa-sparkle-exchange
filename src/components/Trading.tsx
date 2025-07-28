import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUpDown, DollarSign, CreditCard, Wallet } from "lucide-react";
import { useState } from "react";

const Trading = () => {
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = useState('');
  const [price] = useState('$0.1847'); // Mock price

  return (
    <section id="trade" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Торговая <span className="bg-gradient-primary bg-clip-text text-transparent">Платформа</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Простая и безопасная торговля Kaspa с минимальными комиссиями
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Trading Interface */}
          <Card className="bg-card/80 backdrop-blur-md border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <ArrowUpDown className="w-6 h-6 text-kaspa-primary" />
                Торговый терминал
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Trade Type Selector */}
              <div className="flex rounded-lg bg-secondary p-1">
                <button
                  onClick={() => setTradeType('buy')}
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                    tradeType === 'buy'
                      ? 'bg-kaspa-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Купить
                </button>
                <button
                  onClick={() => setTradeType('sell')}
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                    tradeType === 'sell'
                      ? 'bg-destructive text-destructive-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Продать
                </button>
              </div>

              {/* Current Price */}
              <div className="bg-secondary/50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Текущая цена KAS:</span>
                  <span className="text-2xl font-bold text-kaspa-primary">{price}</span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  <span className="text-kaspa-primary">+5.67%</span> за 24ч
                </div>
              </div>

              {/* Amount Input */}
              <div className="space-y-2">
                <Label htmlFor="amount">Количество KAS</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="text-lg"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Минимум: 10 KAS</span>
                  <span>Баланс: 1,234.56 KAS</span>
                </div>
              </div>

              {/* Total */}
              <div className="bg-secondary/50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Итого:</span>
                  <span className="text-xl font-bold">
                    ${amount ? (parseFloat(amount) * 0.1847).toFixed(2) : '0.00'}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Комиссия: $0.01 (0.01%)
                </div>
              </div>

              {/* Action Button */}
              <Button
                variant={tradeType === 'buy' ? 'crypto' : 'destructive'}
                size="lg"
                className="w-full"
              >
                {tradeType === 'buy' ? 'Купить KAS' : 'Продать KAS'}
              </Button>

              {/* Payment Methods */}
              <div className="border-t border-border pt-4">
                <p className="text-sm text-muted-foreground mb-3">Способы оплаты:</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex items-center justify-center p-3 bg-secondary/50 rounded-lg">
                    <CreditCard className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex items-center justify-center p-3 bg-secondary/50 rounded-lg">
                    <Wallet className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex items-center justify-center p-3 bg-secondary/50 rounded-lg">
                    <DollarSign className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8">Почему выбирают нас?</h3>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-kaspa-primary/20 p-3 rounded-lg">
                    <DollarSign className="w-6 h-6 text-kaspa-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Минимальные комиссии</h4>
                    <p className="text-muted-foreground">
                      Всего 0.01% за торговые операции - одни из самых низких на рынке
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-crypto-blue/20 p-3 rounded-lg">
                    <ArrowUpDown className="w-6 h-6 text-crypto-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Мгновенные сделки</h4>
                    <p className="text-muted-foreground">
                      Покупка и продажа происходят моментально благодаря технологии Kaspa
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <CreditCard className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Удобные способы оплаты</h4>
                    <p className="text-muted-foreground">
                      Банковские карты, электронные кошельки, банковские переводы
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-secondary p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">Начните торговать прямо сейчас</h4>
              <p className="text-muted-foreground mb-4">
                Регистрация займет менее минуты. Верификация не требуется для сумм до $1000
              </p>
              <Button variant="crypto" size="lg" className="w-full">
                Создать аккаунт
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trading;