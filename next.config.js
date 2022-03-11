const withPWA = require('next-pwa')

module.exports = withPWA({
    env: {
        wordpressApiUrl: "https://babacric.in/graphql",
        headerMenuName: "BabaCrick Main Menu",
        siteUrl: "http://babacric.in",
    },
    images: {
        domains: ['i0.wp.com', 'secure.gravatar.com', 'babacricnews.s3.ap-south-1.amazonaws.com', 'www.betwaypartners.com'],
    },
})