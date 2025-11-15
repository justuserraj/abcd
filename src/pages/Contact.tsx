import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router";
import { Mail, Phone, Instagram, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission with error handling
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918271754978", "_blank");
  };

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
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Let's <span className="text-violet-500">Connect</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's create something extraordinary together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8">
                <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-3 block">Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="Your name"
                      required
                      className={`bg-white/5 border text-white placeholder:text-gray-500 rounded-lg px-4 py-3 focus:bg-white/10 focus:outline-none transition-all duration-200 ${
                        errors.name ? "border-red-500 focus:border-red-500" : "border-white/20 focus:border-violet-500"
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-3 block">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="your@email.com"
                      required
                      className={`bg-white/5 border text-white placeholder:text-gray-500 rounded-lg px-4 py-3 focus:bg-white/10 focus:outline-none transition-all duration-200 ${
                        errors.email ? "border-red-500 focus:border-red-500" : "border-white/20 focus:border-violet-500"
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-3 block">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Tell us about your project..."
                      required
                      rows={6}
                      className={`bg-white/5 border text-white placeholder:text-gray-500 rounded-lg px-4 py-3 focus:bg-white/10 focus:outline-none transition-all duration-200 resize-none ${
                        errors.message ? "border-red-500 focus:border-red-500" : "border-white/20 focus:border-violet-500"
                      }`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-violet-500/50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* WhatsApp */}
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4">Quick Connect</h3>
                <p className="text-gray-400 mb-6">
                  Need immediate assistance? Reach out to us on WhatsApp
                </p>
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  WhatsApp: +91 8271754978
                </Button>
              </div>

              {/* Contact Details */}
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-violet-600/20 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-violet-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-medium">hello@vizo.agency</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-violet-600/20 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-violet-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="font-medium">+91 8271754978</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-violet-600/40 to-violet-600/20 rounded-full flex items-center justify-center hover:from-violet-600/60 hover:to-violet-600/40 transition-all duration-300 cursor-pointer border border-violet-500/30 hover:border-violet-500/60 shadow-lg hover:shadow-violet-500/20"
                  >
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-violet-300 hover:text-violet-100 transition-colors" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-violet-600/40 to-violet-600/20 rounded-full flex items-center justify-center hover:from-violet-600/60 hover:to-violet-600/40 transition-all duration-300 cursor-pointer border border-violet-500/30 hover:border-violet-500/60 shadow-lg hover:shadow-violet-500/20"
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-violet-300 hover:text-violet-100 transition-colors" />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-violet-600/40 to-violet-600/20 rounded-full flex items-center justify-center hover:from-violet-600/60 hover:to-violet-600/40 transition-all duration-300 cursor-pointer border border-violet-500/30 hover:border-violet-500/60 shadow-lg hover:shadow-violet-500/20"
                  >
                    <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-violet-300 hover:text-violet-100 transition-colors" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
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