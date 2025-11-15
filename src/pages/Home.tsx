import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  const services = [
    { icon: Play, title: "Video Editing", desc: "Cinematic storytelling" },
    { icon: Sparkles, title: "Graphic Design", desc: "Visual excellence" },
    { icon: Zap, title: "Branding", desc: "Identity creation" },
  ];

  const portfolioPreview = [
    { id: 1, image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80", title: "Brand Campaign" },
    { id: 2, image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80", title: "Social Content" },
    { id: 3, image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80", title: "Product Launch" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-tighter cursor-pointer"
            onClick={() => navigate("/")}
          >
            <span className="text-white">VI</span>
            <span className="text-violet-500">ZO</span>
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate("/services")} className="text-sm hover:text-violet-500 transition-colors">Services</button>
            <button onClick={() => navigate("/portfolio")} className="text-sm hover:text-violet-500 transition-colors">Portfolio</button>
            <button onClick={() => navigate("/about")} className="text-sm hover:text-violet-500 transition-colors">About</button>
            <Button onClick={() => navigate("/contact")} className="bg-violet-600 hover:bg-violet-700 text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-blue-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
              See it. <span className="text-violet-500">Feel it.</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500">
                Vizo it.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Transform imagination into visuals. Premium creative services for brands that dare to stand out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/portfolio")}
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-white text-lg px-8 py-6"
              >
                View Our Work <ArrowRight className="ml-2" />
              </Button>
              <Button
                onClick={() => navigate("/contact")}
                size="lg"
                variant="outline"
                className="border-violet-500 text-violet-500 hover:bg-violet-500/10 text-lg px-8 py-6"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-400 text-lg">Creative solutions that elevate your brand</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 cursor-pointer group"
                onClick={() => navigate("/services")}
              >
                <service.icon className="w-12 h-12 text-violet-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-violet-950/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-gray-400 text-lg">Creativity in action</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioPreview.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => navigate("/portfolio")}
              >
                <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => navigate("/portfolio")}
              size="lg"
              variant="outline"
              className="border-violet-500 text-violet-500 hover:bg-violet-500/10"
            >
              View All Projects <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to bring your vision to life?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let's create something extraordinary together
            </p>
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white text-lg px-12 py-6"
            >
              Start Your Project <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <div className="text-2xl font-bold mb-4">
            <span className="text-white">VI</span>
            <span className="text-violet-500">ZO</span>
          </div>
          <p className="mb-4">© 2024 VIZO. All rights reserved.</p>
          <p className="text-sm">Transforming imagination into visuals</p>
        </div>
      </footer>
    </div>
  );
}
