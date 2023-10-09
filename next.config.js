/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
			},
			{
				protocol: "https",
				hostname: "naszsklep-api.vercel.app",
			},
		],
	},
	experimental: {
		typedRoutes: true,
		serverActions: true,
	},

	redirects: async () => {
		return [
			{
				source: "/categories/t-shirts",
				destination: "/categories/t-shirts/1",
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
