/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: [
    "http://192.168.29.191:3000",
    "http://localhost:3000"
  ]
};


export default nextConfig;
