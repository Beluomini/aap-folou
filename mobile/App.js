import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import LoginScreen from './Login';
import HomeScreen from './Home';
import ProductScreen from './Product';
import MyOrdersScreen from './MyOrders';
import RegisterScreen from './Register';
import PerfilScreen from './Perfil';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Product" component={ProductScreen} options={{headerShown: false}} />
        <Stack.Screen name="MyOrders" component={MyOrdersScreen} options={{headerShown: false}} />
        <Stack.Screen name="Perfil" component={PerfilScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;