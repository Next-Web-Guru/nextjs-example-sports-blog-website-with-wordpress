const withPWA = require('next-pwa')
const withPlugins = require('next-compose-plugins');
//const withOffline = require('next-offline')


const nextConfig = {
    env: {
        wordpressApiUrl: "https://babacric.in/graphql",
        headerMenuName: "BabaCrick Main Menu",
        siteUrl: "http://babacric.in",
    },
    images: {
        domains: ['i0.wp.com', 'secure.gravatar.com', 'babacricnews.s3.ap-south-1.amazonaws.com', 'www.betwaypartners.com'],
    },
    pwa: {
        dest: 'public',
        swSrc: '/public/service-worker.js',
    },
}

module.exports = withPlugins([
    [withPWA]
], nextConfig);