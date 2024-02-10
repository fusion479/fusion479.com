/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // TODO: optimize images using cloudinary, or migrate to vercel
  // https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
