const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./"
});

const customJestConfig = {
  testEnvironment: "node",
  collectCoverageFrom: ["lib/**/*.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1"
  }
};

module.exports = createJestConfig(customJestConfig);
