import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Twitter, 
  Youtube, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin,
  Send
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground">
                K
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                KaspaTrade
              </span>
            </div>
            <p className="text-muted-foreground">
              Ведущая криптовалютная платформа для торговли Kaspa. Безопасно, быстро, надежно.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-kaspa-primary">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-kaspa-primary">
                <Youtube className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-kaspa-primary">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-kaspa-primary transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-kaspa-primary transition-colors">
                  О Kaspa
                </a>
              </li>
              <li>
                <a href="#trade" className="text-muted-foreground hover:text-kaspa-primary transition-colors">
                  Торговля
                </a>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-kaspa-primary transition-colors">
                  Особенности
                </a>
              </li>
              <li>
                <a href="/api" className="text-muted-foreground hover:text-kaspa-primary transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <a href="/help" className="text-muted-foreground hover:text-kaspa-primary transition-colors">
                  Центр помощи
                </a>
              </li>
              <li>
                <a href="/faq" className="text-muted-foreground hover:text-kaspa-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/security" className="text-muted-foreground hover:text-kaspa-primary transition-colors">
                  Безопасность
                </a>
              </li>
              <li>
                <a href="/fees" className="text-muted-foreground hover:text-kaspa-primary transition-colors">
                  Комиссии
                </a>
              </li>
              <li>
                <a href="/legal" className="text-muted-foreground hover:text-kaspa-primary transition-colors">
                  Правовая информация
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@kaspatrade.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Москва, Россия</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Подписаться на новости</h4>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="flex-1"
                />
                <Button variant="crypto" size="icon">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © {currentYear} KaspaTrade. Все права защищены.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-muted-foreground hover:text-kaspa-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-kaspa-primary transition-colors">
              Условия использования
            </a>
            <a href="/cookies" className="text-muted-foreground hover:text-kaspa-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;