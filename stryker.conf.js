module.exports = function(config){
  config.set({
    files: [
      {
        pattern: "src/**/*.js",
        mutated: true,
        included: false
      },
      "src/**/*.test.js",
      "src/**/__snapshots__/*.snap",
    ],
    testRunner: "jest",
    mutator: "javascript",
    coverageAnalysis: "off"
  });
}
