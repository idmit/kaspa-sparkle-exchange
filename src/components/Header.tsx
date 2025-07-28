import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground">
              K
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              KaspaTrade
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-kaspa-primary transition-colors">
              Главная
            </a>
            <a href="#about" className="text-foreground hover:text-kaspa-primary transition-colors">
              О Kaspa
            </a>
            <a href="#trade" className="text-foreground hover:text-kaspa-primary transition-colors">
              Торговля
            </a>
            <a href="#features" className="text-foreground hover:text-kaspa-primary transition-colors">
              Особенности
            </a>
            <a href="#contact" className="text-foreground hover:text-kaspa-primary transition-colors">
              Контакты
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Войти</Button>
            <Button variant="crypto" size="lg">
              Начать торговать
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#home" className="text-foreground hover:text-kaspa-primary transition-colors">
                Главная
              </a>
              <a href="#about" className="text-foreground hover:text-kaspa-primary transition-colors">
                О Kaspa
              </a>
              <a href="#trade" className="text-foreground hover:text-kaspa-primary transition-colors">
                Торговля
              </a>
              <a href="#features" className="text-foreground hover:text-kaspa-primary transition-colors">
                Особенности
              </a>
              <a href="#contact" className="text-foreground hover:text-kaspa-primary transition-colors">
                Контакты
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost">Войти</Button>
                <Button variant="crypto">Начать торговать</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;