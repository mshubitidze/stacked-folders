/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "tbcbusiness.ge",
      },
    ],
  },
};

export default nextConfig;
