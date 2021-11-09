const withImages = require('next-images')

module.exports = withImages({
    hostname: "daniiel.dev",
    images: {
        disableStaticImages: true,
    },
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true,
            },
        ]
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    swcMinify: true,
})