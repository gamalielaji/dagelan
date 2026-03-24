import { dagelanConfig } from "@/lib/site-config";

export function DagelanFooter() {
  return (
    <footer className="bg-dagelan-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-dagelan-yellow rounded-lg flex items-center justify-center font-bold text-dagelan-black text-sm">
                D
              </div>
              <span className="text-xl font-bold text-white">dagelan</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              {dagelanConfig.description}
            </p>
            <div className="flex gap-4 mt-6">
              {Object.entries(dagelanConfig.socials).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all text-xs uppercase font-medium"
                >
                  {name.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Platform</h4>
            <div className="space-y-3">
              {["Content", "Layak Viral", "Creators", "INMF"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-sm text-white/40 hover:text-white/70 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <div className="space-y-3">
              {["About", "Careers", "Press", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-sm text-white/40 hover:text-white/70 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Dagelan. Part of INFIA Group.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/50">
              Privacy
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/50">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
