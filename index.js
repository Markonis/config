module.exports = (function() {
  return {
    readEnv: function(prop, defaultValue) {
      if (process.env[prop]) {
        return process.env[prop];
      }
      else {
        return defaultValue;
      }
    },

    getEnvironment: function() {
      return this.readEnv('NODE_ENV', 'development');
    }
  };
}());
