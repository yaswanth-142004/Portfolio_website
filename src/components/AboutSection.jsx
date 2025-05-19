import { Briefcase, Code, User, Brain, Sparkles, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-gradient-to-b from-background/80 via-background to-background/90 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-500/20 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl opacity-20 animate-float-delayed"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">Me</span>
          </h2>
          
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-indigo-500 rounded-full mx-auto mb-12"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Profile Image - Using standard img tag for React */}
          <motion.div 
            className="md:col-span-4 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Decorative elements behind the image */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-indigo-500 rounded-full opacity-70 blur-sm animate-spin-slow"></div>
              <div className="absolute -inset-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-30 blur-md -z-10"></div>
              
              {/* Profile image container using standard img tag */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img 
                  src="/projects/candid_pic.JPG" 
                  alt="Profile Image" 
                  className="object-cover w-full h-full"
                  loading="eager"
                />
                
                {/* Glass overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -right-4 top-5 bg-gradient-to-r from-blue-500 to-cyan-400 p-2 rounded-full shadow-lg"
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
                }}
              >
                <Code className="h-5 w-5 text-white" />
              </motion.div>
              
              <motion.div 
                className="absolute -left-4 bottom-5 bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full shadow-lg"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  y: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }
                }}
              >
                <Brain className="h-5 w-5 text-white" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-full shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  y: { repeat: Infinity, duration: 2.8, ease: "easeInOut", delay: 1 }
                }}
              >
                <Sparkles className="h-5 w-5 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* About Text Content */}
          <motion.div 
            className="space-y-6 md:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-foreground/90 leading-relaxed">
              I'm a Computer Science student at SRM University, Andhra Pradesh, with a passion for building intelligent systems that make a difference.
            </h3>

            <div className="prose prose-sm md:prose-base text-muted-foreground leading-relaxed max-w-none">
              <p>
                I specialize in <span className="text-primary font-medium">Agentic AI applications</span>, combining autonomous behavior with problem-solving logic to create AI tools that are proactive, context-aware, and goal-driven.
              </p>
              
              <h4 className="text-lg font-medium text-foreground mt-6 mb-3">What I Offer:</h4>
              
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-gradient-to-br from-primary to-indigo-500 text-white mt-0.5">
                    <Brain className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Agentic AI Services:</span> Custom AI agents for task automation, personal assistants, and domain-specific intelligent tools - from ideation to deployment.
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-gradient-to-br from-purple-500 to-pink-500 text-white mt-0.5">
                    <Cpu className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Machine Learning & Deep Learning:</span> End-to-end ML pipelines including data preprocessing, model building, tuning, and evaluation for classification, prediction, and image/text analysis.
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400 text-white mt-0.5">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-medium text-foreground">NLP Applications:</span> Domain-specific natural language processing systems for text classification, sentiment analysis, chatbots, healthcare analytics, and more.
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-gradient-to-br from-amber-500 to-orange-500 text-white mt-0.5">
                    <Code className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Full Stack Web Development:</span> Robust and scalable web apps using the MERN stack with features like real-time communication, secure auth flows, and cloud integrations.
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.a 
                href="#contact" 
                className="cosmic-button bg-gradient-to-r from-primary via-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-primary/25 transition-all duration-300 text-center flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
                <Sparkles className="h-4 w-4" />
              </motion.a>

              <motion.a
                href=""
                className="px-6 py-3 rounded-full border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 text-center backdrop-blur-sm flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Download CV
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Skills Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            {
              icon: <Code className="h-6 w-6 text-white" />,
              title: "Web Development",
              description: "Building responsive, accessible web applications with React and modern frameworks.",
              color: "from-blue-500 to-cyan-400",
              stats: [
                { label: "Projects", value: "20+" },
                { label: "Clients", value: "15" }
              ]
            },
            {
              icon: <Brain className="h-6 w-6 text-white" />,
              title: "Artificial Intelligence",
              description: "Developing intelligent systems using machine learning, deep learning, and natural language processing.",
              color: "from-purple-500 to-pink-500",
              stats: [
                { label: "Models", value: "30+" },
                { label: "Accuracy", value: "95%" }
              ]
            },
            {
              icon: <Sparkles className="h-6 w-6 text-white" />,
              title: "Generative AI Agents",
              description: "Creating autonomous AI agents that can understand, reason, and take actions to solve complex problems.",
              color: "from-amber-500 to-orange-500",
              stats: [
                { label: "Agents", value: "10+" },
                { label: "Tasks", value: "100+" }
              ]
            }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="gradient-border p-6 card-hover bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-xl text-foreground pt-1">{item.title}</h4>
                </div>
                
                <p className="text-muted-foreground mt-1 mb-4 flex-grow">
                  {item.description}
                </p>
                
                <div className="mt-auto">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent my-4"></div>
                  
                  <div className="flex justify-between items-center">
                    {item.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold text-foreground">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
