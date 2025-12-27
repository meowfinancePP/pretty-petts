module.exports = {
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src', 'utils'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.visual.js']
}
