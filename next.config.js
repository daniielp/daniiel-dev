const withImages = require('next-images')

module.exports = withImages({
    images: {
        disableStaticImages: true
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
})