import { View, Text } from 'react-native';
import React from 'react';
const Stack = createStackNavigator();
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './src/screens/HomeScreen';
import ProductDetail from './src/screens/ProductDetail';
import { StatusBar } from 'react-native';
import COLORS from './consts/colors';



const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.light} />
        <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={ProductDetail} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;




