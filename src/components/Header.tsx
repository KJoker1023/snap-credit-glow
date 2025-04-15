
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3",
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-pactgreen-700">
              PACT OWOH LIMITED
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pactgreen-600 font-medium">Home</a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-pactgreen-600 font-medium">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg p-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100">
                <a href="#snap-credit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pactgreen-50 hover:text-pactgreen-600 rounded-md">Snap Credit</a>
                <a href="#online-loan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pactgreen-50 hover:text-pactgreen-600 rounded-md">Online Loan</a>
                <a href="#ez-loan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pactgreen-50 hover:text-pactgreen-600 rounded-md">EZloan</a>
              </div>
            </div>
            <a href="#about" className="text-gray-700 hover:text-pactgreen-600 font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-pactgreen-600 font-medium">Contact</a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-pactgreen-600 hover:bg-pactgreen-700 animate-scale-in">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 py-4">
              <a href="#home" className="text-gray-700 hover:text-pactgreen-600 font-medium">Home</a>
              <a href="#snap-credit" className="text-gray-700 hover:text-pactgreen-600 font-medium pl-4">Snap Credit</a>
              <a href="#online-loan" className="text-gray-700 hover:text-pactgreen-600 font-medium pl-4">Online Loan</a>
              <a href="#ez-loan" className="text-gray-700 hover:text-pactgreen-600 font-medium pl-4">EZloan</a>
              <a href="#about" className="text-gray-700 hover:text-pactgreen-600 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-pactgreen-600 font-medium">Contact</a>
              <Button className="bg-pactgreen-600 hover:bg-pactgreen-700 w-full">
                Apply Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
