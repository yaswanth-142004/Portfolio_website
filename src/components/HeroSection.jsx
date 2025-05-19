import { ArrowDown, Code, Server, Star, Globe, Brain } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-background to-background/80"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl"></div>
      </div>
      
      {/* Floating icons */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <Code className="absolute top-1/4 left-1/4 w-8 h-8 text-primary animate-float" />
        <Server className="absolute top-1/3 right-1/4 w-6 h-6 text-secondary animate-float-delay-1" />
        <Star className="absolute bottom-1/4 left-1/3 w-5 h-5 text-yellow-500 animate-float-delay-2" />
        <Globe className="absolute bottom-1/3 right-1/3 w-7 h-7 text-blue-500 animate-float-delay-3" />
        <Brain className="absolute top-1/2 right-1/5 w-6 h-6 text-purple-500 animate-float-delay-4" />
      </div>

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">
          {/* Animated title with gradient effect */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            <span className={`inline-block transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-700 delay-100`}>
              Hi, I'm
            </span>
            <span className={`text-primary inline-block transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-700 delay-300`}>
              {" "}
              Yaswanth Sai
            </span>
            <span className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 ml-2 inline-block transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-700 delay-500`}>
              {" "}
              Valluru
            </span>
          </h1>

          {/* Animated tagline with typing effect */}
          <div className={`transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-700 delay-700`}>
            <p className="text-xl md:text-2xl font-medium text-primary/80 typewriter-text">
              Agentic AI Developer & ML Engineer
            </p>
          </div>

          {/* Bio with animated reveal */}
          <div className={`bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-700 delay-900`}>
            <p className="text-lg text-white/80 leading-relaxed">
              Computer Science student at SRM University specializing in <span className="text-primary font-medium">Agentic AI applications</span>, 
              <span className="text-purple-400 font-medium"> Machine Learning</span>, and 
              <span className="text-blue-400 font-medium"> Full Stack Development</span>. 
              Building intelligent systems that combine autonomous behavior with problem-solving logic 
              to create AI tools that are proactive, context-aware, and goal-driven.
            </p>
          </div>

          {/* Expertise icons */}
          <div className={`flex flex-wrap justify-center gap-6 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-700 delay-1100`}>
            <div className="flex flex-col items-center p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 w-24">
              <Brain className="h-8 w-8 text-purple-400 mb-2" />
              <span className="text-sm font-medium">AI</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 w-24">
              <Server className="h-8 w-8 text-blue-400 mb-2" />
              <span className="text-sm font-medium">ML/DL</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 w-24">
              <Code className="h-8 w-8 text-green-400 mb-2" />
              <span className="text-sm font-medium">Web Dev</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 w-24">
              <Globe className="h-8 w-8 text-yellow-400 mb-2" />
              <span className="text-sm font-medium">NLP</span>
            </div>
          </div>

          {/* CTA Button with hover effect */}
          <div className={`pt-6 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-700 delay-1300`}>
            <a 
              href="#projects" 
              className="relative inline-flex items-center px-8 py-4 overflow-hidden font-medium transition-all bg-primary rounded-lg hover:bg-primary/90 group"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative text-white font-medium text-lg">View My Work</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator with enhanced animation */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
        <span className="text-sm text-white/60 mb-2">Scroll to explore</span>
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-scroll-down"></div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delay-1 {
          animation: float 7s ease-in-out 1s infinite;
        }
        
        .animate-float-delay-2 {
          animation: float 9s ease-in-out 2s infinite;
        }
        
        .animate-float-delay-3 {
          animation: float 6s ease-in-out 3s infinite;
        }
        
        .animate-float-delay-4 {
          animation: float 10s ease-in-out 4s infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1.5s ease forwards 2s;
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translate(-50%, 20px); }
          100% { opacity: 1; transform: translate(-50%, 0); }
        }
        
        @keyframes scrollDown {
          0% { transform: translateY(0); opacity: 1; }
          75% { transform: translateY(8px); opacity: 0; }
          76% { transform: translateY(0); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        .animate-scroll-down {
          animation: scrollDown 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
        
        .typewriter-text {
          overflow: hidden;
          border-right: 3px solid transparent;
          white-space: nowrap;
          width: 0;
          animation: typing 3s steps(40, end) forwards 1.5s,
                     blink-caret .75s step-end infinite;
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: rgba(255,255,255,0.6); }
        }
      `}</style>
    </section>
  );
};