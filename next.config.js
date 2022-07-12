/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      'tailwindui.com',
      'images.unsplash.com',
      'vercel.com',
      'www.cashbackforex.com',
      'cms.tpfx.co.id'
    ]
  },
  reactStrictMode: true,
  rewrites: async () => [
    {source: '/jurnal', destination: '/src/pages/api/static/jurnal/index.ts'},
  ],
};
