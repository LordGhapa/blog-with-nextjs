/** @type {import('next').NextConfig} */

const nextConfig = {
	trailingSlash: true,
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
