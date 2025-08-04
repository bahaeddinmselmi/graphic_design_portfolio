import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink, 
  Menu, 
  X,
  Palette,
  Layers,
  Type,
  Monitor,
  Printer,
  Zap,
  Award,
  Calendar,
  Users,
  Star,
  Image,
  Layout,
  Globe,
  Coffee
} from 'lucide-react';

// Portfolio data structure
const portfolioData = {
  brandIdentity: [
    {
      title: "Black and White Science Class Logo",
      image: "./portfolio/Black and White Simple Vintage Grunge Science Class Logo.png",
      category: "Logo Design",
      description: "A vintage-inspired educational brand identity combining scientific precision with classic aesthetics.",
      tools: ["Adobe Illustrator", "Adobe Photoshop"],
      featured: true
    },
    {
      title: "Tunisia Shop Branding",
      image: "./portfolio/Tunisiashop.png",
      category: "Brand Identity",
      description: "Complete brand identity for an authentic Tunisian marketplace, featuring traditional motifs with modern appeal.",
      tools: ["Adobe Illustrator", "Adobe Photoshop"],
      featured: true
    },
    {
      title: "Modern P Monogram",
      image: "./portfolio/P.png",
      category: "Logo Design",
      description: "Minimalist and sophisticated monogram design showcasing modern typography and geometric precision.",
      tools: ["Adobe Illustrator"],
      featured: true
    }
  ],
  marketing: [
    {
      title: "Night Club DJ Flyer",
      image: "./portfolio/Black Party Night Club Dj Flyer.png",
      category: "Event Marketing",
      description: "Dynamic and energetic flyer design for nightlife events, capturing the essence of modern club culture.",
      tools: ["Adobe Photoshop", "Adobe Illustrator"],
      featured: true
    },
    {
      title: "Tunisian Music Festival Poster",
      image: "./portfolio/tunisian-music-poster.png",
      category: "Event Marketing",
      description: "Cultural event poster blending traditional Tunisian elements with contemporary design principles.",
      tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
      featured: true
    },
    {
      title: "Yasmine Music Club Poster",
      image: "./portfolio/yasmine-music-club-poster.png",
      category: "Event Marketing",
      description: "Vibrant poster design for a music venue, emphasizing atmosphere and entertainment.",
      tools: ["Adobe Photoshop", "Adobe Illustrator"],
      featured: true
    },
    {
      title: "Creative Design Exhibition",
      image: "./portfolio/Untitled design.png",
      category: "Event Marketing",
      description: "Contemporary poster design for an art exhibition, featuring dynamic composition and modern typography.",
      tools: ["Adobe InDesign", "Adobe Photoshop"],
      featured: true
    }
  ],
  foodAndBeverage: [
    {
      title: "Tunisia Food Campaign",
      image: "./portfolio/Tunisa Food.png",
      category: "Food & Beverage",
      description: "Mouth-watering food photography and design layout showcasing Tunisian cuisine.",
      tools: ["Adobe Photoshop", "Adobe InDesign", "Adobe Lightroom"],
      featured: true
    },
    {
      title: "Culinary Art Direction",
      image: "/graphic_design_portfolio/portfolio/Untitled design (1).png",
      category: "Food & Beverage",
      description: "Art direction and styling for a high-end restaurant menu and marketing materials.",
      tools: ["Adobe Photoshop", "Adobe InDesign", "Adobe Lightroom"],
      featured: true
    }
  ],
  photography: [
    {
      title: "Camping Photo Collage",
      image: "./portfolio/Beige Parchment Background Camping Photo Collage.png",
      category: "Photography & Layout",
      description: "Artistic photo collage capturing outdoor adventures with a vintage aesthetic.",
      tools: ["Adobe Photoshop", "Adobe Lightroom"],
      featured: true
    }
  ],
  digitalDesign: [
    {
      title: "E-commerce Website Design",
      image: "/graphic_design_portfolio/portfolio/Tunisiashop.png",
      category: "UI/UX Design",
      description: "Modern e-commerce platform design featuring intuitive navigation and engaging visuals.",
      tools: ["Adobe XD", "Adobe Photoshop", "Figma"],
      featured: true
    },
    {
      title: "Mobile App Interface",
      image: "/graphic_design_portfolio/portfolio/Untitled design.png",
      category: "UI/UX Design",
      description: "Clean and intuitive mobile application interface design with focus on user experience.",
      tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
      featured: true
    }
  ],
  socialMedia: [
    {
      title: "Instagram Content Strategy",
      image: "/graphic_design_portfolio/portfolio/Untitled design (1).png",
      category: "Social Media",
      description: "Cohesive social media design package including story templates, post designs, and highlights covers.",
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Canva"],
      featured: true
    }
  ]
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const categories = [
    { id: 'all', label: 'All Work', icon: Layout },
    { id: 'brandIdentity', label: 'Brand Identity', icon: Award },
    { id: 'marketing', label: 'Marketing', icon: Users },
    { id: 'foodAndBeverage', label: 'Food & Beverage', icon: Coffee },
    { id: 'photography', label: 'Photography', icon: Image },
    { id: 'digitalDesign', label: 'Digital Design', icon: Monitor },
    { id: 'socialMedia', label: 'Social Media', icon: Globe }
  ];

  // Get all portfolio items in a flat array
  const portfolioItems = Object.entries(portfolioData).flatMap(([category, items]) =>
    items.map(item => ({
      ...item,
      categoryId: category
    }))
  );

  const filteredProjects = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.categoryId === selectedCategory);

  const skills = [
    { name: "Adobe Creative Suite", level: 95, icon: Palette },
    { name: "Brand Identity Design", level: 90, icon: Award },
    { name: "Typography", level: 88, icon: Type },
    { name: "UI/UX Design", level: 85, icon: Monitor },
    { name: "Print Design", level: 92, icon: Printer },
    { name: "Digital Marketing", level: 80, icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Baha Eddin
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'about', 'portfolio', 'skills', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 capitalize ${
                      activeSection === item
                        ? 'text-purple-600 border-b-2 border-purple-600'
                        : 'text-gray-700 hover:text-purple-600'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-purple-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'portfolio', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 capitalize w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Baha Eddin
                  <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Mselmi
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Creative Graphic Designer with 2+ years of experience crafting compelling visual stories and brand identities.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  View My Work
                </button>
                <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-purple-600 hover:text-purple-600 transition-colors duration-200 flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download CV
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone size={20} className="text-purple-600" />
                  <span>+216 56454845</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail size={20} className="text-purple-600" />
                  <span>bahaeddinmselmi1@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-30"></div>
                <div className="absolute inset-8 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <Palette size={80} className="text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate graphic designer dedicated to creating impactful visual solutions that tell compelling stories and drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 2 years of professional experience in graphic design, I specialize in creating cohesive brand identities, 
                compelling marketing materials, and innovative digital designs. My approach combines creative vision with strategic 
                thinking to deliver designs that not only look great but also achieve business objectives.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm proficient in the complete Adobe Creative Suite and stay current with the latest design trends and technologies. 
                My work spans across various industries, from startups to established brands, helping them communicate their message 
                effectively through visual design.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">2+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Layers className="w-8 h-8 text-purple-600 mb-2" />
                    <h3 className="font-semibold text-gray-900">Brand Identity</h3>
                    <p className="text-sm text-gray-600">Creating cohesive brand experiences</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Type className="w-8 h-8 text-blue-600 mb-2" />
                    <h3 className="font-semibold text-gray-900">Typography</h3>
                    <p className="text-sm text-gray-600">Crafting readable, beautiful text</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Monitor className="w-8 h-8 text-green-600 mb-2" />
                    <h3 className="font-semibold text-gray-900">Digital Design</h3>
                    <p className="text-sm text-gray-600">Modern web and app interfaces</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Printer className="w-8 h-8 text-orange-600 mb-2" />
                    <h3 className="font-semibold text-gray-900">Print Design</h3>
                    <p className="text-sm text-gray-600">High-quality print materials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A curated collection of my professional work spanning brand identity, marketing materials, and digital design.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden aspect-w-16 aspect-h-12">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <button className="w-full bg-white/95 backdrop-blur-sm text-gray-900 py-2.5 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors">
                        <ExternalLink size={16} />
                        View Project Details
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proficient in industry-standard tools and techniques, with a focus on delivering high-quality design solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tools & Software</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Adobe After Effects',
                  'Figma', 'Sketch', 'Adobe XD', 'Canva', 'CorelDRAW'
                ].map((tool, index) => (
                  <span
                    key={index}
                    className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-300">+216 56454845</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-300">bahaeddinmselmi1@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-300">Tunisia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-4">Why Choose Me?</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">2+ years of professional experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">Fast turnaround times</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">Unlimited revisions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">Creative and innovative solutions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Baha Eddin Mselmi
            </h3>
            <p className="text-gray-400 mb-4">Graphic Designer • Visual Storyteller • Creative Problem Solver</p>
            <p className="text-gray-500 text-sm">
              © 2024 Baha Eddin Mselmi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;