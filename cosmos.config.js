module.exports = {
  webpack: (config) => {
    return {
      ...config,
      mode: 'development'
    };
  }
};
