import { cn } from "@/lib/utils";
import { Menu, X, Home, User, Code, Briefcase, Mail, ChevronDown, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero", icon: <Home size={16} /> },
  { name: "About", href: "#about", icon: <User size={16} /> },
  { name: "Skills", href: "#skills", icon: <Code size={16} /> },
  { name: "Projects", href: "#projects", icon: <Briefcase size={16} /> },
  { name: "Contact", href: "#contact", icon: <Mail size={16} /> },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom > 150;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-500",
        isScrolled 
          ? "py-3 bg-background/80 backdrop-blur-md shadow-lg border-b border-white/10" 
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo with animation */}
        <a
          className="text-xl font-bold flex items-center group"
          href="#hero"
        >
          <span className="relative z-10 flex items-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <span className="relative bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-extrabold">
              Yaswanth
            </span>
            <span className="text-foreground ml-1">Tech</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, key) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300",
                  isActive 
                    ? "text-white bg-primary/90 shadow-md shadow-primary/20" 
                    : "text-foreground/70 hover:text-primary hover:bg-primary/10"
                )}
              >
                <span className="mr-1.5">{item.icon}</span>
                {item.name}
                {isActive && (
                  <span className="ml-1.5 animate-pulse">
                    <ChevronDown size={14} className="transform rotate-180" />
                  </span>
                )}
              </a>
            );
          })}
          
          {/* Theme toggle button */}
          <button 
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-background/80 border border-white/10 hover:bg-primary/10 transition-colors duration-300"
            aria-label="Toggle dark/light mode"
          >
            {isDarkMode ? 
              <Sun size={18} className="text-yellow-400" /> : 
              <Moon size={18} className="text-blue-400" />
            }
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={cn(
            "md:hidden p-2 rounded-md transition-all duration-300",
            isMenuOpen ? "bg-primary text-white" : "text-foreground hover:bg-primary/10"
          )}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile navigation overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center",
            "transition-all duration-500 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center space-y-6 text-xl">
            {navItems.map((item, key) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={key}
                  href={item.href}
                  className={cn(
                    "flex items-center px-6 py-3 rounded-lg transition-all duration-300",
                    isActive 
                      ? "text-white bg-primary shadow-lg shadow-primary/30 scale-110" 
                      : "text-foreground/80 hover:text-primary hover:bg-primary/10"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </a>
              );
            })}
            
            {/* Mobile theme toggle */}
            <button 
              onClick={toggleTheme}
              className="mt-8 p-4 rounded-full bg-background/30 border border-white/10 hover:bg-primary/20 transition-colors duration-300"
              aria-label="Toggle dark/light mode"
            >
              {isDarkMode ? 
                <Sun size={24} className="text-yellow-400" /> : 
                <Moon size={24} className="text-blue-400" />
              }
            </button>
          </div>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 transition-all duration-300" style={{ 
        width: `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%`,
        opacity: isScrolled ? 1 : 0
      }}></div>
    </nav>
  );
};