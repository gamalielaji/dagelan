import { DagelanNavbar } from "@/components/dagelan/navbar";
import { DagelanFooter } from "@/components/dagelan/footer";
import { dagelanConfig } from "@/lib/site-config";

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dagelan-black overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 bg-dagelan-yellow/10 border border-dagelan-yellow/20 rounded-full mb-8">
          <span className="w-2 h-2 bg-dagelan-yellow rounded-full animate-pulse" />
          <span className="text-dagelan-yellow text-sm font-medium">
            Indonesia&apos;s #1 Entertainment Platform
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up-delay-1 text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6">
          We Make
          <br />
          <span className="gradient-text bg-gradient-to-r from-dagelan-yellow via-amber-300 to-dagelan-yellow-dark">
            Indonesia Laugh
          </span>
        </h1>

        <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          24 juta orang terhubung lewat humor, budaya pop, dan kreativitas.
          Dagelan bukan cuma konten — ini komunitas.
        </p>

        {/* CTA */}
        <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#brands"
            className="px-8 py-4 bg-dagelan-yellow text-dagelan-black font-bold rounded-xl hover:bg-dagelan-yellow-dark transition-all glow-yellow text-lg"
          >
            Partner With Us
          </a>
          <a
            href="#content"
            className="px-8 py-4 bg-white/5 text-white border border-white/10 font-semibold rounded-xl hover:bg-white/10 transition-all text-lg"
          >
            Explore Content
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: dagelanConfig.stats.followers, label: "Followers" },
            { value: dagelanConfig.stats.monthlyReach, label: "Monthly Reach" },
            { value: dagelanConfig.stats.brands, label: "Brand Partners" },
            { value: dagelanConfig.stats.creators, label: "Creators" },
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

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dagelan-black to-transparent" />
    </section>
  );
}

function ContentSection() {
  const categories = [
    {
      title: "Memes & Humor",
      desc: "Konten humor yang relatable untuk Gen Z & Millennials Indonesia",
      icon: "😂",
      color: "from-yellow-500/20 to-amber-500/20",
    },
    {
      title: "Pop Culture",
      desc: "Dari K-Pop sampai anime, kita bahas semuanya",
      icon: "🎭",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Social Commentary",
      desc: "Observasi tajam tentang kehidupan sehari-hari orang Indonesia",
      icon: "💬",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Layak Viral",
      desc: "Kurasi konten terbaik yang layak untuk dibagikan",
      icon: "🔥",
      color: "from-red-500/20 to-orange-500/20",
    },
  ];

  return (
    <section id="content" className="py-24 bg-dagelan-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            What We Do
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Konten yang menghibur, menginspirasi, dan membangun komunitas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group relative bg-dagelan-gray rounded-2xl p-8 border border-white/5 hover:border-dagelan-yellow/20 transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div className="relative z-10">
                <span className="text-4xl mb-4 block">{cat.icon}</span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {cat.title}
                </h3>
                <p className="text-white/50">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandsSection() {
  return (
    <section id="brands" className="py-24 bg-dagelan-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Reach{" "}
              <span className="gradient-text bg-gradient-to-r from-dagelan-yellow to-amber-300">
                24 Million
              </span>{" "}
              Indonesians
            </h2>
            <p className="text-white/50 text-lg mb-8 leading-relaxed">
              Brand partnership yang otentik. Bukan sekadar placement — tapi
              integrasi konten yang natural dengan engagement rate tertinggi di
              industri.
            </p>
            <div className="space-y-4">
              {[
                "Branded content yang terasa organic",
                "Akses ke INMF — 38+ brand, 60M+ total reach",
                "Data-driven campaign optimization",
                "Full-funnel attribution & reporting",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-dagelan-yellow/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-dagelan-yellow"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-white/70">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-block mt-8 px-8 py-4 bg-dagelan-yellow text-dagelan-black font-bold rounded-xl hover:bg-dagelan-yellow-dark transition-all"
            >
              Get Media Kit
            </a>
          </div>

          {/* Stats card */}
          <div className="bg-dagelan-black rounded-2xl p-8 border border-white/5">
            <h3 className="text-lg font-semibold text-white/60 mb-6">
              Platform Performance
            </h3>
            <div className="space-y-6">
              {[
                { label: "Avg. Engagement Rate", value: "8.4%", bar: 84 },
                { label: "Story Completion Rate", value: "72%", bar: 72 },
                { label: "Content Save Rate", value: "12%", bar: 60 },
                { label: "Brand Recall", value: "89%", bar: 89 },
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/50">{metric.label}</span>
                    <span className="text-white font-semibold">
                      {metric.value}
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-dagelan-yellow to-amber-300 rounded-full"
                      style={{ width: `${metric.bar}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-dagelan-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Since 2014
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-8">
            Dari akun meme di Instagram, Dagelan tumbuh jadi ekosistem
            entertainment terbesar di Indonesia. Sekarang, kami bukan cuma
            platform — kami adalah bagian dari budaya pop Indonesia.
          </p>
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-3xl font-black text-dagelan-yellow">10+</div>
              <div className="text-sm text-white/40 mt-1">Years</div>
            </div>
            <div>
              <div className="text-3xl font-black text-dagelan-yellow">36+</div>
              <div className="text-sm text-white/40 mt-1">IPs Created</div>
            </div>
            <div>
              <div className="text-3xl font-black text-dagelan-yellow">120M+</div>
              <div className="text-sm text-white/40 mt-1">Total Audience</div>
            </div>
          </div>
          <p className="text-white/30 text-sm mt-12">
            Part of{" "}
            <span className="text-white/50 font-medium">INFIA Group</span> —
            Indonesia&apos;s leading IP-centric ecosystem builder
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-dagelan-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-white/50 text-lg mb-10">
            Brand partnership, kolaborasi kreator, atau sekadar ngobrol — reach
            out.
          </p>

          <form className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-dagelan-black border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-dagelan-yellow/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-dagelan-black border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-dagelan-yellow/50 transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Company / Brand"
              className="w-full px-4 py-3 bg-dagelan-black border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-dagelan-yellow/50 transition-colors"
            />
            <textarea
              rows={4}
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 bg-dagelan-black border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-dagelan-yellow/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-dagelan-yellow text-dagelan-black font-bold rounded-xl hover:bg-dagelan-yellow-dark transition-all text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function DagelanHome() {
  return (
    <main className="bg-dagelan-black text-white">
      <DagelanNavbar />
      <HeroSection />
      <ContentSection />
      <BrandsSection />
      <AboutSection />
      <ContactSection />
      <DagelanFooter />
    </main>
  );
}
