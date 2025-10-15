/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para export estático
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Opcional: cambiar la carpeta de salida
  // distDir: 'out'
};

export default nextConfig;
