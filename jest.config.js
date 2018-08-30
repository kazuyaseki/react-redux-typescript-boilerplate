module.exports = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^app/(.*)$': '<rootDir>/src/app/$1'
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
