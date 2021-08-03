module.exports = {
  async redirects() {
    return [
      {
        source: '/tutorform',
        destination:
          'https://docs.google.com/forms/d/e/1FAIpQLSeAxKDaI5DbgiyHv-io6OB5rzIi2oLWXmjQTVClE9ZHO9RwKA/viewform',
        permanent: true
      },
      {
        source: '/learncs',
        destination: 'https://forms.gle/YRHUBBcF3CTTxttn7',
        permanent: true
      },
      {
        source: '/tuteeform',
        destination:
          'https://docs.google.com/forms/d/e/1FAIpQLScY-XHARen4wTGYQXL68uvUtJsz6BeDi7XyWkt23OZQS6XJMQ/viewform',
        permanent: true
      },
      {
        source: '/programs',
        destination: '/#programs',
        permanent: true
      },
      {
        source: '/programs/tutoring',
        destination: '/',
        permanent: true
      },
      {
        source: '/volunteer',
        destination: '/#volunteer',
        permanent: true
      }
    ];
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      });
    }

    return config;
  }
};
