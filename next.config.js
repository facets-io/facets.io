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
            '/blog': { page: '/blog' },
            '/contact': { page: '/contact' },
        }
    },
    pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
})