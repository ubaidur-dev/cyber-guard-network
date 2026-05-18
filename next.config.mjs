process.env.NODE_NO_WARNINGS = '1';

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['baseline-browser-mapping'],
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
};

export default nextConfig;