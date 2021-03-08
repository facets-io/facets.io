const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/
});

module.exports = withMDX({
    exportPathMap: async function (
        defaultPathMap, { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/documentation': { page: '/documentation' },
            '/contact': { page: '/contact' },
            '/pricing': { page: '/pricing' },
            '/privacy-policy': { page: '/privacy-policy' },
        }
    },
    pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
    trailingSlash: true,
})