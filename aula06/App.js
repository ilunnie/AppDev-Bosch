import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { UtilsContext, Forms } from './src/pages/config/context'
import Usuarios from './src/pages/Usuarios'
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';

export default function App() {
  const [utils, setUtils] = useState({})
  const [forms, setForms] = useState({})
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <UtilsContext.Provider value={{utils, setUtils}}>
        <Forms.Provider value={{forms, setForms}}>
          <Stack.Navigator>
            <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name="Usuarios" component={Usuarios} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </Forms.Provider>
      </UtilsContext.Provider>
    </NavigationContainer>
  );
}
