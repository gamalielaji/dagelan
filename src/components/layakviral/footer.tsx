import { layakViralConfig } from "@/lib/site-config";

export function LayakViralFooter() {
  return (
    <footer className="bg-lv-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-lv-red to-lv-orange rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">
                Layak<span className="text-lv-red">Viral</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              {layakViralConfig.description}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Explore</h4>
            <div className="space-y-3">
              {["Trending", "Categories", "Creators", "Hall of Fame"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-sm text-white/40 hover:text-white/70 transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Info</h4>
            <div className="space-y-3">
              {["About", "Submit Content", "Guidelines", "API"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-sm text-white/40 hover:text-white/70 transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Layak Viral. A{" "}
            <a href="https://dagelan.com" className="text-lv-red/50 hover:text-lv-red">
              Dagelan
            </a>{" "}
            IP. Part of INFIA Group.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/50">Privacy</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/50">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
