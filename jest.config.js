const fs = require('fs');
const { pathsToModuleNameMapper } = require("ts-jest/utils");

const rawData = fs.readFileSync('tsconfig.json');
const { compilerOptions } = JSON.parse(rawData);

module.exports = {
  roots: ["<rootDir>"],
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/'})
};
