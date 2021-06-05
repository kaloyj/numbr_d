module.exports = {
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/cypress/",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  modulePaths: ["<rootDir>/components", "<rootDir>/test", "<rootDir>/utils"],
  watchPathIgnorePatterns: ["<rootDir>/phonewords-memo.json"],
  testEnvironment: "jsdom",
};
