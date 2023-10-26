set /p nome="Nome do App: "
npm install --global yarn && yarn add expo && npx create-expo-app %nome% && cd %nome% && npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1 && npm install @react-navigation/native
 && npm install @react-navigation/stack
 && npx expo start
