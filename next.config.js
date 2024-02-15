/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "firebasestorage.googleapis.com" },
      { hostname: "fiverr-res.cloudinary.com" },
      { hostname: "lh3.googleusercontent.com" },
    ],
  },
  distDir: "build"
};

module.exports = nextConfig;
