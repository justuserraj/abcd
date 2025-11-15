import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { useState } from "react";
import { X, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export default function Portfolio() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [dataError, setDataError] = useState(false);
  const [cursor, setCursor] = useState<string | null>(null);
  const [pageHistory, setPageHistory] = useState<(string | null)[]>([null]);
  
  const paginationResult = useQuery(api.portfolio.getPortfolioItems, { 
    paginationOpts: { numItems: 9, cursor }
  });

  const items = paginationResult?.page || [];
  const isDone = paginationResult?.isDone ?? true;
  const continueCursor = paginationResult?.continueCursor ?? null;

  const projects = items.length > 0 ? items : [
    { _id: "1" as any, title: "Brand Campaign 2024", category: "branding", imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80", description: "Complete brand identity redesign", fullDescription: "A comprehensive brand identity redesign that transformed the client's visual presence across all platforms. Included logo design, color palette development, and brand guidelines." },
    { _id: "2" as any, title: "Social Media Series", category: "social", imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80", description: "Engaging content for Instagram", fullDescription: "A series of 30 engaging Instagram posts designed to boost engagement and follower growth. Each post was carefully crafted to align with the brand's voice and aesthetic." },
    { _id: "3" as any, title: "Product Launch Video", category: "video", imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80", description: "Cinematic product showcase", fullDescription: "A cinematic 60-second product launch video featuring professional cinematography, color grading, and motion graphics to create maximum impact." },
    { _id: "4" as any, title: "Corporate Branding", category: "branding", imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80", description: "Professional identity system", fullDescription: "Complete corporate identity system including business cards, letterheads, and digital assets for a Fortune 500 company." },
    { _id: "5" as any, title: "Event Coverage", category: "video", imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80", description: "Full event documentation", fullDescription: "Professional event coverage including highlight reels, testimonial videos, and behind-the-scenes content." },
    { _id: "6" as any, title: "Digital Campaign", category: "design", imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80", description: "Multi-platform design assets", fullDescription: "Comprehensive digital campaign with assets for web, social media, email, and display advertising." },
    { _id: "7" as any, title: "Music Video", category: "video", imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80", description: "Creative storytelling", fullDescription: "A visually stunning music video that tells a compelling story through creative cinematography and editing." },
    { _id: "8" as any, title: "Brand Guidelines", category: "branding", imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80", description: "Comprehensive brand book", fullDescription: "A detailed 50-page brand guidelines document covering typography, color usage, imagery, and tone of voice." },
    { _id: "9" as any, title: "Social Content Pack", category: "social", imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80", description: "Monthly content creation", fullDescription: "A complete monthly content package with 20+ posts, stories, and reels designed for consistent engagement." },
  ];

  const categories = [
    { id: "all", label: "All Work" },
    { id: "video", label: "Video" },
    { id: "branding", label: "Branding" },
    { id: "design", label: "Design" },
    { id: "social", label: "Social Media" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const selectedProjectData = projects.find(p => p._id === selectedProject);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    if (!isDone && continueCursor) {
      setPageHistory([...pageHistory, continueCursor]);
      setCursor(continueCursor);
      scrollToSection("gallery");
    }
  };

  const handlePrevPage = () => {
    if (pageHistory.length > 1) {
      const newHistory = pageHistory.slice(0, -1);
      setPageHistory(newHistory);
      setCursor(newHistory[newHistory.length - 1]);
      scrollToSection("gallery");
    }
  };

  // Handle data fetching errors
  if (paginationResult === undefined) {
    // Still loading
  } else if (paginationResult === null || (Array.isArray(paginationResult) && paginationResult.length === 0 && !dataError)) {
    // Data loaded but empty - use fallback
  } else if (paginationResult instanceof Error) {
    setDataError(true);
  }

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
            <button onClick={() => navigate("/portfolio")} className="text-sm text-violet-500">Portfolio</button>
            <button onClick={() => navigate("/about")} className="text-sm hover:text-violet-500 transition-colors">About</button>
            <Button onClick={() => navigate("/contact")} className="bg-violet-600 hover:bg-violet-700 text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="text-violet-500">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our creative work and see how we bring visions to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section id="filters" className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => {
                  setFilter(cat.id);
                  setCursor(null);
                  setPageHistory([null]);
                  scrollToSection("gallery");
                }}
                variant={filter === cat.id ? "default" : "outline"}
                className={filter === cat.id 
                  ? "bg-violet-600 hover:bg-violet-700 text-white" 
                  : "border-white/20 text-white hover:bg-white/5"
                }
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Error State */}
      {dataError && (
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 text-center"
            >
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Unable to Load Portfolio</h3>
              <p className="text-gray-400 mb-6">We encountered an error loading your portfolio. Please try again.</p>
              <Button
                onClick={() => {
                  setDataError(false);
                  window.location.reload();
                }}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Retry
              </Button>
            </motion.div>
          </div>
        </section>
      )}

      {/* Portfolio Grid */}
      <section id="gallery" className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {paginationResult === undefined && !dataError && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">Loading portfolio items...</p>
            </motion.div>
          )}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project._id)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              onClick={handlePrevPage}
              disabled={pageHistory.length <= 1}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <span className="text-gray-400">
              Page {pageHistory.length}
            </span>
            <Button
              onClick={handleNextPage}
              disabled={isDone}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProjectData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <img 
                src={selectedProjectData.imageUrl} 
                alt={selectedProjectData.title} 
                loading="lazy"
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-2">{selectedProjectData.title}</h2>
              <p className="text-violet-500 text-sm mb-4 capitalize">{selectedProjectData.category}</p>
              <p className="text-gray-300 text-lg mb-6">{selectedProjectData.fullDescription}</p>
              <Button
                onClick={() => {
                  setSelectedProject(null);
                  navigate("/contact");
                }}
                className="bg-violet-600 hover:bg-violet-700 text-white"
              >
                Start Similar Project
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section id="cta" className="py-24 px-6 bg-gradient-to-b from-black to-violet-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want to see your project here?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let's collaborate and create something extraordinary
            </p>
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white text-lg px-12 py-6"
            >
              Start Your Project
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