import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-6 md:p-10 sticky top-0 z-50 bg-[#F5F5F0]/90 backdrop-blur-sm">
      <Link href="/" className="flex items-center">
        <Image 
          src="/logo.png" 
          alt="Sotto Logo" 
          width={120} 
          height={60} 
          priority
          className="h-auto w-auto"
        />
      </Link>
      
      {/* Navigation desktop */}
      <nav className="hidden md:flex items-center gap-8">
        <Link href="/about" className="hover:text-[#D47D5A] transition-colors">À propos</Link>
        <Link href="/demo" className="hover:text-[#D47D5A] transition-colors">Démo</Link>
        <Link href="/blog" className="hover:text-[#D47D5A] transition-colors">Blog</Link>
        <Link href="/resources" className="hover:text-[#D47D5A] transition-colors">Ressources</Link>
        <Link href="/contact" className="hover:text-[#D47D5A] transition-colors">Contact</Link>
        
        {/* Menu déroulant "Mon Sotto" */}
        <div className="relative">
          <button 
            className="flex items-center gap-1 hover:text-[#D47D5A] transition-colors"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            onBlur={() => setTimeout(() => setIsDropdownOpen(false), 100)}
          >
            Mon Sotto
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <Link 
                href="/login" 
                className="block px-4 py-2 text-sm text-[#1A2A40] hover:bg-[#F5F5F0] hover:text-[#D47D5A]"
              >
                Connexion
              </Link>
              <Link 
                href="/dashboard" 
                className="block px-4 py-2 text-sm text-[#1A2A40] hover:bg-[#F5F5F0] hover:text-[#D47D5A]"
              >
                Tableau de bord
              </Link>
              <Link 
                href="/settings" 
                className="block px-4 py-2 text-sm text-[#1A2A40] hover:bg-[#F5F5F0] hover:text-[#D47D5A]"
              >
                Paramètres
              </Link>
              <Link 
                href="/support" 
                className="block px-4 py-2 text-sm text-[#1A2A40] hover:bg-[#F5F5F0] hover:text-[#D47D5A]"
              >
                Support
              </Link>
            </div>
          )}
        </div>
      </nav>
      
      {/* Menu hamburger pour mobile */}
      <button 
        className="md:hidden text-2xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>
      
      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden z-50">
          <div className="flex flex-col p-4">
            <Link 
              href="/about" 
              className="py-2 hover:text-[#D47D5A]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              À propos
            </Link>
            <Link 
              href="/demo" 
              className="py-2 hover:text-[#D47D5A]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Démo
            </Link>
            <Link 
              href="/blog" 
              className="py-2 hover:text-[#D47D5A]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/resources" 
              className="py-2 hover:text-[#D47D5A]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ressources
            </Link>
            <Link 
              href="/contact" 
              className="py-2 hover:text-[#D47D5A]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="border-t border-gray-200 mt-2 pt-2">
              <p className="font-medium py-2">Mon Sotto</p>
              <Link 
                href="/login" 
                className="py-2 pl-4 block hover:text-[#D47D5A]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Connexion
              </Link>
              <Link 
                href="/dashboard" 
                className="py-2 pl-4 block hover:text-[#D47D5A]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tableau de bord
              </Link>
              <Link 
                href="/settings" 
                className="py-2 pl-4 block hover:text-[#D47D5A]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Paramètres
              </Link>
              <Link 
                href="/support" 
                className="py-2 pl-4 block hover:text-[#D47D5A]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
