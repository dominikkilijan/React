import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RandomNumberGenerator from './pages/random-number-generator';
import PasswordGenerator from './pages/password-generator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#4CAF50' },
          headerTintColor: 'black',
          headerTitleStyle: { fontSize: 24, fontWeight: 'bold' },
          headerTitleAlign: 'left',
          headerLeft: null,
        }}
      >
        <Stack.Screen
          name="RandomNumberGenerator"
          component={RandomNumberGenerator}
          options={{ title: 'Generator Liczb' }}
        />
        <Stack.Screen
          name="PasswordGenerator"
          component={PasswordGenerator}
          options={{
            title: 'Generator Hasła',
            headerStyle: { backgroundColor: '#8B4513' },
            headerLeft: null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
