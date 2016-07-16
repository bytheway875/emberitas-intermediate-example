module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'emberitas-intermediate',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
