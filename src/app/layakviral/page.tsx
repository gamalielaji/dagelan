import { LayakViralNavbar } from "@/components/layakviral/navbar";
import { LayakViralFooter } from "@/components/layakviral/footer";
import { layakViralConfig } from "@/lib/site-config";

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-lv-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lv-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lv-orange/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lv-purple/3 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 bg-lv-red/10 border border-lv-red/20 rounded-full mb-8">
          <span className="w-2 h-2 bg-lv-red rounded-full animate-pulse" />
          <span className="text-lv-red text-sm font-medium">
            by Dagelan &middot; INFIA Group
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up-delay-1 text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6">
          Yang Layak
          <br />
          <span className="gradient-text bg-gradient-to-r from-lv-red via-lv-orange to-lv-red animate-gradient">
            Viral
          </span>
        </h1>

        <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          Bukan semua konten layak viral. Kami kurasi yang terbaik — konten yang
          benar-benar worth sharing, worth saving, worth talking about.
        </p>

        {/* CTA */}
        <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#trending"
            className="px-8 py-4 bg-gradient-to-r from-lv-red to-lv-orange text-white font-bold rounded-xl hover:opacity-90 transition-all glow-red text-lg"
          >
            Explore Trending
          </a>
          <a
            href="#submit"
            className="px-8 py-4 bg-white/5 text-white border border-white/10 font-semibold rounded-xl hover:bg-white/10 transition-all text-lg"
          >
            Submit Content
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: layakViralConfig.stats.curatedDaily, label: "Curated Daily" },
            { value: layakViralConfig.stats.monthlyViews, label: "Monthly Views" },
            { value: layakViralConfig.stats.viralRate, label: "Viral Rate" },
            { value: layakViralConfig.stats.avgEngagement, label: "Avg. Engagement" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-white">
                {stat.value}
              </div>
              <div className="text-sm text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-lv-black to-transparent" />
    </section>
  );
}

function TrendingSection() {
  const trendingItems = [
    {
      title: "Ketika Ojol Lebih Filosofis dari Dosen",
      category: "Social Commentary",
      vpi: 94,
      engagement: "12.3%",
      platform: "Instagram",
    },
    {
      title: "POV: Kamu Anak Kos yang Masak Indomie Level 99",
      category: "Lifestyle",
      vpi: 89,
      engagement: "9.7%",
      platform: "TikTok",
    },
    {
      title: "Indonesian Mom vs Western Mom — Reaksi Anak Pulang Malam",
      category: "Culture",
      vpi: 91,
      engagement: "11.2%",
      platform: "Instagram",
    },
    {
      title: "Startup Indonesia Starter Pack 2026",
      category: "Tech & Business",
      vpi: 87,
      engagement: "8.9%",
      platform: "Twitter",
    },
    {
      title: "Gen Z Indo Explain: Kenapa Kita Bilang 'Literally' Tiap Kalimat",
      category: "Language",
      vpi: 92,
      engagement: "10.5%",
      platform: "TikTok",
    },
    {
      title: "Warung Makan Aesthetic vs Warung Pinggir Jalan — Taste Test",
      category: "Food",
      vpi: 88,
      engagement: "9.1%",
      platform: "YouTube",
    },
  ];

  return (
    <section id="trending" className="py-24 bg-lv-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-2">
              Trending Now
            </h2>
            <p className="text-white/50">Konten dengan VPI Score tertinggi hari ini</p>
          </div>
          <div className="flex gap-2">
            {["All", "Instagram", "TikTok", "YouTube"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === "All"
                    ? "bg-lv-red text-white"
                    : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingItems.map((item, i) => (
            <div
              key={item.title}
              className="group bg-lv-gray rounded-2xl p-6 border border-white/5 hover:border-lv-red/20 transition-all duration-300 cursor-pointer"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-video bg-lv-gray-light rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-lv-red/10 to-lv-orange/10" />
                <span className="text-6xl opacity-30">
                  {["😂", "🍜", "🇮🇩", "💼", "🗣️", "🍽️"][i]}
                </span>
                {/* VPI Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-lv-black/80 backdrop-blur rounded-lg">
                  <span className="text-xs font-bold text-lv-red">
                    VPI {item.vpi}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-white/50">
                  {item.category}
                </span>
                <span className="text-xs text-white/30">{item.platform}</span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-lv-red transition-colors line-clamp-2">
                {item.title}
              </h3>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                <span className="text-sm text-white/40">
                  Engagement: {item.engagement}
                </span>
                <svg
                  className="w-5 h-5 text-white/20 group-hover:text-lv-red transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  const categories = [
    { name: "Social Commentary", count: "2.4K", icon: "💬", color: "from-blue-500 to-cyan-500" },
    { name: "Pop Culture", count: "1.8K", icon: "🎭", color: "from-purple-500 to-pink-500" },
    { name: "Food & Lifestyle", count: "3.1K", icon: "🍜", color: "from-orange-500 to-amber-500" },
    { name: "Tech & Startup", count: "890", icon: "💻", color: "from-emerald-500 to-teal-500" },
    { name: "Relationship", count: "2.7K", icon: "💕", color: "from-pink-500 to-rose-500" },
    { name: "Indonesian Culture", count: "1.5K", icon: "🇮🇩", color: "from-red-500 to-orange-500" },
  ];

  return (
    <section id="categories" className="py-24 bg-lv-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Categories
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Eksplorasi konten berdasarkan kategori yang kamu suka
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group relative bg-lv-black rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all cursor-pointer overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
              <div className="relative z-10">
                <span className="text-3xl mb-3 block">{cat.icon}</span>
                <h3 className="text-lg font-bold text-white mb-1">
                  {cat.name}
                </h3>
                <p className="text-sm text-white/40">{cat.count} posts</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Submit",
      desc: "Creator atau siapapun bisa submit konten yang mereka temukan atau buat sendiri",
    },
    {
      step: "02",
      title: "AI + Human Curation",
      desc: "VPI Score dari AI + mata tajam tim kurasi Dagelan memfilter yang terbaik",
    },
    {
      step: "03",
      title: "Amplify",
      desc: "Konten terpilih didistribusikan ke 24M+ audience lewat ekosistem Dagelan & INMF",
    },
  ];

  return (
    <section className="py-24 bg-lv-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            How It Works
          </h2>
          <p className="text-white/50 text-lg">
            Dari submission sampai viral — prosesnya transparan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.step} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-lv-red to-lv-orange rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-black text-white">
                  {step.step}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-white/50 leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 w-8 text-white/10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubmitSection() {
  return (
    <section id="submit" className="py-24 bg-lv-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Submit Your Content
          </h2>
          <p className="text-white/50 text-lg mb-10">
            Punya konten yang layak viral? Submit dan biarkan tim kurasi kami
            yang menilai. Kalau layak — kita viralkan.
          </p>

          <form className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name / Handle"
                className="w-full px-4 py-3 bg-lv-black border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-lv-red/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-lv-black border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-lv-red/50 transition-colors"
              />
            </div>
            <input
              type="url"
              placeholder="Content URL (Instagram, TikTok, YouTube, Twitter)"
              className="w-full px-4 py-3 bg-lv-black border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-lv-red/50 transition-colors"
            />
            <select className="w-full px-4 py-3 bg-lv-black border border-white/10 rounded-xl text-white/50 focus:outline-none focus:border-lv-red/50 transition-colors">
              <option>Select Category</option>
              <option>Social Commentary</option>
              <option>Pop Culture</option>
              <option>Food & Lifestyle</option>
              <option>Tech & Startup</option>
              <option>Relationship</option>
              <option>Indonesian Culture</option>
            </select>
            <textarea
              rows={3}
              placeholder="Why is this content worth going viral?"
              className="w-full px-4 py-3 bg-lv-black border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-lv-red/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-lv-red to-lv-orange text-white font-bold rounded-xl hover:opacity-90 transition-all text-lg"
            >
              Submit for Review
            </button>
            <p className="text-center text-white/30 text-xs">
              Review dalam 24 jam. Konten terpilih akan dikreditkan ke creator asli.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-lv-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            What is{" "}
            <span className="gradient-text bg-gradient-to-r from-lv-red to-lv-orange">
              Layak Viral
            </span>
            ?
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-6">
            Layak Viral adalah IP kurasi konten dari Dagelan. Di era di mana
            semua orang bisa bikin konten, kami hadir sebagai filter — memastikan
            yang sampai ke audience benar-benar berkualitas, relevan, dan layak
            untuk dibagikan.
          </p>
          <p className="text-white/40 leading-relaxed mb-12">
            Dengan kombinasi AI scoring (VPI — Viral Potential Index) dan human
            curation, kami menemukan konten terbaik Indonesia setiap hari. Bukan
            clickbait. Bukan rage bait. Yang benar-benar bagus.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
            <span className="text-white/30 text-sm">An IP by</span>
            <a
              href="https://dagelan.com"
              className="text-dagelan-yellow font-bold text-sm hover:underline"
            >
              Dagelan
            </a>
            <span className="text-white/30 text-sm">&middot; Part of</span>
            <span className="text-white/50 font-medium text-sm">
              INFIA Group
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LayakViralHome() {
  return (
    <main className="bg-lv-black text-white">
      <LayakViralNavbar />
      <HeroSection />
      <TrendingSection />
      <CategoriesSection />
      <HowItWorksSection />
      <SubmitSection />
      <AboutSection />
      <LayakViralFooter />
    </main>
  );
}
