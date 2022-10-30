/* eslint-disable indent */
const withImages = require('next-images');

module.exports = withImages({
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
        ];
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    i18n: {
        locales: ['da', 'en'],
        defaultLocale: 'da',
        localeDetection: false,
    },
    trailingSlash: false,
    swcMinify: true,
});
