import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        // layakviral.com or layakviral.localhost:3000 → /layakviral routes
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "layakviral.com",
            },
          ],
          destination: "/layakviral/:path*",
        },
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "www.layakviral.com",
            },
          ],
          destination: "/layakviral/:path*",
        },
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "layakviral.localhost",
            },
          ],
          destination: "/layakviral/:path*",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
