const withImages = require('next-images')

module.exports = {
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true,
            },
        ]
    },
}

module.exports = withImages()