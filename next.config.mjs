/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.mos.cms.futurecdn.net',
        port: '',
        pathname: '/my8AUCgUhKERqBBwdPQuXG-1200-80.jpg',
      },
      {
        protocol: 'https',
        hostname: 'img.hi.91mobiles.com',
        port: '',
        pathname: '/uploads/2022/04/Netflix-Plan-list.jpg',
      },
      {   
        protocol: 'https',
        hostname: 'martech.org',
        port: '',
        pathname: '/wp-content/uploads/2017/09/spotify-logo-1920x1080.jpg',
      },
      {   
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/modernattire/modern_attire_logo-03.png',
      },
      
    ],
  },
};


export default nextConfig;
