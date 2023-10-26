import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import { UtilsContext } from './src/pages/Config';

export default function App() {
  const [utils, setUtils] = useState()
  const Stack = createStackNavigator()
  return (
    <NavigatorContainer>
      <UtilsContext.Provider value={{utils, setUtils}}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false, title: "Login" }}/>
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </UtilsContext.Provider>
    </NavigatorContainer>
  );
}
