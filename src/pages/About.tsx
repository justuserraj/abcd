import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { Target, Eye, Zap, Users } from "lucide-react";

export default function About() {
  const navigate = useNavigate();

  const values = [
    { icon: Target, title: "Precision", desc: "Every detail matters in our creative process" },
    { icon: Eye, title: "Vision", desc: "We see beyond the ordinary to create the extraordinary" },
    { icon: Zap, title: "Innovation", desc: "Pushing boundaries with cutting-edge creativity" },
    { icon: Users, title: "Collaboration", desc: "Your vision combined with our expertise" },
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
            <button onClick={() => navigate("/about")} className="text-sm text-violet-500">About</button>
            <Button onClick={() => navigate("/contact")} className="bg-violet-600 hover:bg-violet-700 text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About <span className="text-violet-500">VIZO</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A creative powerhouse transforming imagination into visuals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-400 text-lg mb-4">
                VIZO was born from a simple belief: every brand has a unique story waiting to be told visually. We're not just a creative agency—we're storytellers, designers, and innovators who live and breathe visual excellence.
              </p>
              <p className="text-gray-400 text-lg mb-4">
                From high-end video editing to comprehensive branding solutions, we provide the creative firepower that helps our clients stand out in a crowded digital landscape.
              </p>
              <p className="text-gray-400 text-lg">
                Whether you're a startup finding your voice or an established brand looking to evolve, we bring the expertise, creativity, and passion to make your vision a reality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-violet-600/30 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-violet-950/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-400 text-lg">What drives us every day</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 text-center"
              >
                <value.icon className="w-12 h-12 text-violet-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Approach</h2>
            <p className="text-gray-400 text-lg mb-8">
              We believe in a collaborative process where your vision meets our expertise. Every project begins with understanding your goals, audience, and brand identity. From there, we craft creative solutions that not only look stunning but deliver real results.
            </p>
            <p className="text-gray-400 text-lg mb-12">
              Our team combines technical mastery with artistic vision, ensuring every frame, every design, and every campaign is executed to perfection. We don't just create content—we create experiences that resonate.
            </p>
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white text-lg px-12 py-6"
            >
              Work With Us
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
        </div>
      </footer>
    </div>
  );
}
