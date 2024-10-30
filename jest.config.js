module.exports = {
  preset: 'react-native',
  setupFiles: [
    // './src/mock/api',
    // './src/mock/services',
 ],
 setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
 transformIgnorePatterns: [
   "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*)"
 ],
 moduleFileExtensions: [
   "ts",
   "tsx",
   "js",
   "jsx",
 ],
 moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
