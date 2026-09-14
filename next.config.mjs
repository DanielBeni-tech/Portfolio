/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['3000-' + (process.env.BASE44_PUBLIC_HOST_SUFFIX || 'localhost')],
};

export default nextConfig;
