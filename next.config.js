module.exports = {
  async redirects() {
    return [
      {
        source: "/programs",
        destination: "/#programs",
        permanent: true,
      },
    ];
  },
};
