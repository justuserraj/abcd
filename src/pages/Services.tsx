import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { Play, Palette, Sparkles, Share2, FileText, ArrowRight } from "lucide-react";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Play,
      title: "Video Editing",
      description: "Cinematic storytelling that captivates your audience. From raw footage to polished masterpieces.",
      features: ["Color Grading", "Motion Graphics", "Sound Design", "Post-Production"],
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Visual excellence that speaks volumes. Creating designs that leave lasting impressions.",
      features: ["Logo Design", "Brand Assets", "Print Design", "Digital Graphics"],
    },
    {
      icon: Sparkles,
      title: "Branding",
      description: "Identity creation that defines who you are. Building brands that resonate and inspire.",
      features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Rebranding"],
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Strategic presence across all platforms. Engaging content that grows your community.",
      features: ["Content Strategy", "Community Management", "Analytics", "Campaign Management"],
    },
    {
      icon: FileText,
      title: "Content Creation",
      description: "Compelling narratives that connect. From concept to execution, we craft stories that matter.",
      features: ["Copywriting", "Photography", "Videography", "Content Planning"],
    },
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
            <button onClick={() => navigate("/services")} className="text-sm text-violet-500">Services</button>
            <button onClick={() => navigate("/portfolio")} className="text-sm hover:text-violet-500 transition-colors">Portfolio</button>
            <button onClick={() => navigate("/about")} className="text-sm hover:text-violet-500 transition-colors">About</button>
            <Button onClick={() => navigate("/contact")} className="bg-violet-600 hover:bg-violet-700 text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="text-violet-500">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Full-service creative solutions tailored to elevate your brand and captivate your audience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 md:p-12 hover:border-violet-500/50 transition-all"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <service.icon className="w-16 h-16 text-violet-500 mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-400 text-lg mb-6">{service.description}</p>
                  <Button
                    onClick={() => navigate("/contact")}
                    className="bg-violet-600 hover:bg-violet-700 text-white"
                  >
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <motion.div
                      key={feature}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-3 bg-white/5 rounded-lg p-4"
                    >
                      <div className="w-2 h-2 bg-violet-500 rounded-full" />
                      <span className="text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
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
              Let's create something amazing
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Ready to elevate your brand? Get in touch with us today
            </p>
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white text-lg px-12 py-6"
            >
              Contact Us <ArrowRight className="ml-2" />
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
