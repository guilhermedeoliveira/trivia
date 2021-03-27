module.exports = {
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage/',
    '<rootDir>/cypresss/',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(graphql|gql)$': 'jest-transform-graphql',
  },
  moduleDirectories: ['node_modules', 'src'],
  coverageDirectory: 'coverage-jest',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
}
