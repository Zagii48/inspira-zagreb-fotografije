
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleAnchorClick = (anchor: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-[#2c2c2c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-accent">Inspira</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/') ? 'text-accent' : 'text-white'
              }`}
            >
              Početna
            </Link>
            
            <Link
              to="/galerija/portreti"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname.includes('/galerija') ? 'text-accent' : 'text-white'
              }`}
            >
              Galerija
            </Link>

            <Link
              to="/faq"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/faq') ? 'text-accent' : 'text-white'
              }`}
            >
              FAQ
            </Link>

            <button
              onClick={() => handleAnchorClick('usluge')}
              className="text-sm font-medium text-white hover:text-accent transition-colors"
            >
              Usluge
            </button>
            
            <button
              onClick={() => handleAnchorClick('kontakt')}
              className="text-sm font-medium text-white hover:text-accent transition-colors"
            >
              Kontakt
            </button>
          </nav>

          {/* Mobile menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className="w-4 h-0.5 bg-white mb-1"></span>
                  <span className="w-4 h-0.5 bg-white mb-1"></span>
                  <span className="w-4 h-0.5 bg-white"></span>
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-surface border-[#2c2c2c]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  to="/"
                  className="text-lg font-medium text-white hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Početna
                </Link>
                
                <Link
                  to="/galerija/portreti"
                  className="text-lg font-medium text-white hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Galerija
                </Link>

                <Link
                  to="/faq"
                  className="text-lg font-medium text-white hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </Link>

                <button
                  onClick={() => handleAnchorClick('usluge')}
                  className="text-lg font-medium text-white hover:text-accent transition-colors text-left"
                >
                  Usluge
                </button>
                
                <button
                  onClick={() => handleAnchorClick('kontakt')}
                  className="text-lg font-medium text-white hover:text-accent transition-colors text-left"
                >
                  Kontakt
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
