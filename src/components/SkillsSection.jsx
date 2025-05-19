import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  Code, 
  Server, 
   Wrench,
  Cpu, 
  Brain, 
  Bot,
  Search
} from "lucide-react";



const skills = [
  // Frontend
  { 
    name: "HTML/CSS", 
    level: 95, 
    category: "frontend",
    icon: <Code size={20} />,
    color: "from-orange-500 to-pink-500" 
  },
  { 
    name: "JavaScript", 
    level: 90, 
    category: "frontend",
    icon: <Code size={20} />,
    color: "from-yellow-400 to-yellow-600" 
  },
  { 
    name: "React", 
    level: 90, 
    category: "frontend",
    icon: <Code size={20} />,
    color: "from-blue-400 to-blue-600" 
  },
  { 
    name: "TypeScript", 
    level: 85, 
    category: "frontend",
    icon: <Code size={20} />,
    color: "from-blue-500 to-blue-700" 
  },
  { 
    name: "Tailwind CSS", 
    level: 90, 
    category: "frontend",
    icon: <Code size={20} />,
    color: "from-cyan-500 to-cyan-700" 
  },
  { 
    name: "Next.js", 
    level: 80, 
    category: "frontend",
    icon: <Code size={20} />,
    color: "from-gray-700 to-gray-900" 
  },

  // Backend
  { 
    name: "Node.js", 
    level: 80, 
    category: "backend",
    icon: <Server size={20} />,
    color: "from-green-500 to-green-700" 
  },
  { 
    name: "Express", 
    level: 75, 
    category: "backend",
    icon: <Server size={20} />,
    color: "from-gray-500 to-gray-700" 
  },
  { 
    name: "MongoDB", 
    level: 70, 
    category: "backend",
    icon: <Server size={20} />,
    color: "from-green-600 to-green-800" 
  },
  { 
    name: "PostgreSQL", 
    level: 65, 
    category: "backend",
    icon: <Server size={20} />,
    color: "from-blue-600 to-blue-800" 
  },
  { 
    name: "GraphQL", 
    level: 60, 
    category: "backend",
    icon: <Server size={20} />,
    color: "from-pink-500 to-pink-700" 
  },

  // Wrench
  { 
    name: "Git/GitHub", 
    level: 90, 
    category: "tools",
    icon: <Wrench size={20} />,
    color: "from-orange-600 to-orange-800" 
  },
  { 
    name: "Docker", 
    level: 70, 
    category: "tools",
    icon: <Wrench size={20} />,
    color: "from-blue-500 to-blue-700" 
  },
  { 
    name: "Figma", 
    level: 85, 
    category: "tools",
    icon: <Wrench size={20} />,
    color: "from-purple-500 to-purple-700" 
  },
  { 
    name: "VS Code", 
    level: 95, 
    category: "tools",
    icon: <Wrench size={20} />,
    color: "from-blue-600 to-blue-800" 
  },
  { 
    name: "Postman", 
    level: 80, 
    category: "tools",
    icon: <Wrench size={20} />,
    color: "from-orange-500 to-orange-700" 
  },

  // Agentic-ai
  { 
    name: "LangChain", 
    level: 80, 
    category: "Agentic-ai",
    icon: <Brain size={20} />,
    color: "from-emerald-500 to-emerald-700" 
  },
  { 
    name: "LlamaIndex", 
    level: 75, 
    category: "Agentic-ai",
    icon: <Brain size={20} />,
    color: "from-yellow-500 to-yellow-700" 
  },
  { 
    name: "Haystack", 
    level: 70, 
    category: "Agentic-ai",
    icon: <Brain size={20} />,
    color: "from-blue-500 to-blue-700" 
  },
  { 
    name: "ChromaDB", 
    level: 65, 
    category: "Agentic-ai",
    icon: <Brain size={20} />,
    color: "from-purple-500 to-purple-700" 
  },
  { 
    name: "Pinecone", 
    level: 60, 
    category: "Agentic-ai",
    icon: <Brain size={20} />,
    color: "from-green-600 to-green-800" 
  },
  
  // ML
  { 
    name: "TensorFlow", 
    level: 70, 
    category: "ML",
    icon: <Cpu size={20} />,
    color: "from-orange-500 to-orange-700" 
  },
  { 
    name: "PyTorch", 
    level: 75, 
    category: "ML",
    icon: <Cpu size={20} />,
    color: "from-red-500 to-red-700" 
  },
  { 
    name: "Scikit-learn", 
    level: 80, 
    category: "ML",
    icon: <Cpu size={20} />,
    color: "from-blue-500 to-blue-700" 
  },
  { 
    name: "Keras", 
    level: 85, 
    category: "ML",
    icon: <Cpu size={20} />,
    color: "from-red-600 to-red-800" 
  },
  { 
    name: "OpenCV", 
    level: 70, 
    category: "ML",
    icon: <Cpu size={20} />,
    color: "from-green-500 to-green-700" 
  },
  
  // AI
  { 
    name: "OpenAI API", 
    level: 80, 
    category: "AI",
    icon: <Bot size={20} />,
    color: "from-teal-500 to-teal-700" 
  },
  { 
    name: "Hugging Face", 
    level: 75, 
    category: "AI",
    icon: <Bot size={20} />,
    color: "from-yellow-500 to-yellow-700" 
  },
  { 
    name: "Stable Diffusion", 
    level: 65, 
    category: "AI",
    icon: <Bot size={20} />,
    color: "from-purple-500 to-purple-700" 
  },
  { 
    name: "ChatGPT", 
    level: 90, 
    category: "AI",
    icon: <Bot size={20} />,
    color: "from-green-500 to-green-700" 
  },
  { 
    name: "DALL-E", 
    level: 80, 
    category: "AI",
    icon: <Bot size={20} />,
    color: "from-blue-500 to-blue-700" 
  },
  { 
    name: "Midjourney", 
    level: 75, 
    category: "AI",
    icon: <Bot size={20} />,
    color: "from-indigo-500 to-indigo-700" 
  },
  { 
    name: "Transformers", 
    level: 70, 
    category: "AI",
    icon: <Bot size={20} />,
    color: "from-yellow-600 to-yellow-800" 
  },
  { 
    name: "BERT", 
    level: 65, 
    category: "AI",
    icon: <Bot size={20} />,
    color: "from-blue-600 to-blue-800" 
  },
  { 
    name: "GPT-3", 
    level: 80, 
    category: "AI",
    icon: <Bot size={20} />,
    color: "from-emerald-500 to-emerald-700" 
  },
  { 
    name: "GPT-4", 
    level: 75, 
    category: "AI",
    icon: <Bot size={20} />,
    color: "from-teal-500 to-teal-700" 
  },
  { 
    name: "Chatbot Development", 
    level: 70, 
    category: "AI",
    icon: <Bot size={20} />,
    color: "from-cyan-500 to-cyan-700" 
  },
  { 
    name: "Natural Language Processing", 
    level: 85, 
    category: "AI",
    icon: <Bot size={20} />,
    color: "from-blue-500 to-blue-700" 
  },
];

const categories = ["all", "frontend", "backend", "tools", "Agentic-ai", "ML", "AI"];

const categoryIcons = {
  "all": <Search size={18} />,
  "frontend": <Code size={18} />,
  "backend": <Server size={18} />,
  "tools": <Wrench size={18} />,
  "Agentic-ai": <Brain size={18} />,
  "ML": <Cpu size={18} />,
  "AI": <Bot size={18} />
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredSkills = skills.filter(
    (skill) => 
      (activeCategory === "all" || skill.category === activeCategory) &&
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-gradient-to-b from-secondary/20 to-secondary/40">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            My <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various domains.
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 rounded-full bg-background/80 backdrop-blur-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, key) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-full transition-all duration-300 capitalize flex items-center gap-2 font-medium shadow-sm",
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-primary-light text-primary-foreground"
                  : "bg-card/80 backdrop-blur-sm text-foreground hover:bg-card/90 hover:shadow-md"
              )}
            >
              {categoryIcons[category]}
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill, key) => (
              <motion.div
                key={key}
                variants={item}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-card/90 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-border/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color} text-white`}>
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                  </div>
                  <span className="text-sm font-medium px-2.5 py-1 rounded-full bg-background/80 text-foreground">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="w-full bg-background/50 h-2.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
                
                <div className="mt-3 flex justify-between items-center text-sm text-muted-foreground">
                  <span className="capitalize px-2.5 py-1 rounded-full bg-secondary/30 text-xs">
                    {skill.category}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-1.5 h-6 rounded-full ${
                          i < Math.floor(skill.level / 20) 
                            ? `bg-gradient-to-t ${skill.color} opacity-${(i+1) * 20}` 
                            : "bg-background/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-12"
            >
              <p className="text-muted-foreground text-lg">No skills found matching your search criteria.</p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
                className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Reset filters
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
