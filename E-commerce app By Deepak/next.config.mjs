/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'fakestoreapi.com'
            },
            {
                protocol:'https',
                hostname:'images-eu.ssl-images-amazon.com'
            },
            {
                protocol: 'https',
                hostname: 'brandpalettes.com',
              },
              {
                protocol: 'https',
                hostname: 's6.imgcdn.dev'
              },
        ]
    }
};

export default nextConfig;