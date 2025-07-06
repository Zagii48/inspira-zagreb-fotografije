import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileGalleryOpen, setIsMobileGalleryOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isGalleryActive = location.pathname.includes('/galerija');

  const galleryLinks = [
    { title: 'Portreti', path: '/galerija/portreti' },
    { title: 'Lifestyle', path: '/galerija/lifestyle' },
    { title: 'Boudoir', path: '/galerija/boudoir' },
    { title: 'Vjenčanja i eventi', path: '/galerija/vjencanja-eventi' }
  ];

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
            
            {/* Galerija Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`text-sm font-medium transition-colors hover:text-accent flex items-center space-x-1 ${
                    isGalleryActive ? 'text-accent' : 'text-white'
                  }`}
                >
                  <span>Galerija</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-surface border-[#2c2c2c] min-w-[200px]">
                {galleryLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link
                      to={link.path}
                      className="w-full text-white hover:text-accent focus:text-accent cursor-pointer"
                    >
                      {link.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/usluge"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/usluge') ? 'text-accent' : 'text-white'
              }`}
            >
              Usluge
            </Link>

            <Link
              to="/faq"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/faq') ? 'text-accent' : 'text-white'
              }`}
            >
              FAQ
            </Link>
            
            <Link
              to="/kontakt"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/kontakt') ? 'text-accent' : 'text-white'
              }`}
            >
              Kontakt
            </Link>
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
                
                {/* Mobile Galerija Expandable */}
                <div>
                  <button
                    onClick={() => setIsMobileGalleryOpen(!isMobileGalleryOpen)}
                    className="flex items-center justify-between w-full text-lg font-medium text-white hover:text-accent transition-colors"
                  >
                    <span>Galerija</span>
                    <svg 
                      className={`w-4 h-4 transition-transform ${isMobileGalleryOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isMobileGalleryOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      {galleryLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="block text-base text-subtext hover:text-accent transition-colors py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/usluge"
                  className="text-lg font-medium text-white hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Usluge
                </Link>

                <Link
                  to="/faq"
                  className="text-lg font-medium text-white hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                
                <Link
                  to="/kontakt"
                  className="text-lg font-medium text-white hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
