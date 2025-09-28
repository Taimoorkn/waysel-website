import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      '@phosphor-icons/react',
      'swiper',
      '@material-tailwind/react'
    ]
  },
  
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Compress responses
  compress: true,
  
  // Optimize webpack chunks
  webpack: (config, { dev, isServer }) => {
    // Bundle analyzer for client-side bundles (conditional import)
    if (process.env.ANALYZE === 'true' && !isServer) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: '../analyze/client.html'
        })
      );
    }

    // Optimize chunks for production
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
          },
          // Separate chunk for Phosphor Icons
          phosphor: {
            test: /[\\/]node_modules[\\/]@phosphor-icons[\\/]/,
            name: 'phosphor-icons',
            chunks: 'all',
            priority: 10,
            enforce: true,
          },
          // Separate chunk for Swiper
          swiper: {
            test: /[\\/]node_modules[\\/]swiper[\\/]/,
            name: 'swiper',
            chunks: 'all',
            priority: 10,
            enforce: true,
          },
          // Separate chunk for Material Tailwind
          materialTailwind: {
            test: /[\\/]node_modules[\\/]@material-tailwind[\\/]/,
            name: 'material-tailwind',
            chunks: 'all',
            priority: 10,
            enforce: true,
          },
          // Separate chunk for React Phone Input
          phoneInput: {
            test: /[\\/]node_modules[\\/]react-phone-input-2[\\/]/,
            name: 'react-phone-input',
            chunks: 'all',
            priority: 10,
            enforce: true,
          },
        },
      };
    }
    
    return config;
  },
};

export default nextConfig;