
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const galleryItems = [
    { name: 'Portreti', path: '/galerija/portreti' },
    { name: 'Lifestyle', path: '/galerija/lifestyle' },
    { name: 'Boudoir', path: '/galerija/boudoir' },
    { name: 'Vjenčanja i eventi', path: '/galerija/vjencanja-eventi' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-inspira">Inspira</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-inspira ${
                isActive('/') ? 'text-inspira' : 'text-gray-700'
              }`}
            >
              Početna
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-gray-700 hover:text-inspira transition-colors">
                Galerija
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                {galleryItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-inspira hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/usluge"
              className={`text-sm font-medium transition-colors hover:text-inspira ${
                isActive('/usluge') ? 'text-inspira' : 'text-gray-700'
              }`}
            >
              Usluge
            </Link>
            
            <Link
              to="/kontakt"
              className={`text-sm font-medium transition-colors hover:text-inspira ${
                isActive('/kontakt') ? 'text-inspira' : 'text-gray-700'
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
                  <span className="w-4 h-0.5 bg-gray-700 mb-1"></span>
                  <span className="w-4 h-0.5 bg-gray-700 mb-1"></span>
                  <span className="w-4 h-0.5 bg-gray-700"></span>
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-white">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  to="/"
                  className="text-lg font-medium text-gray-700 hover:text-inspira transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Početna
                </Link>
                
                <div className="space-y-2">
                  <div className="text-lg font-medium text-gray-700">Galerija</div>
                  {galleryItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block pl-4 text-gray-600 hover:text-inspira transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/usluge"
                  className="text-lg font-medium text-gray-700 hover:text-inspira transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Usluge
                </Link>
                
                <Link
                  to="/kontakt"
                  className="text-lg font-medium text-gray-700 hover:text-inspira transition-colors"
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
