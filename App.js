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
          headerStyle: { backgroundColor: '#4CAF50' }, // Default header color (green)
          headerTintColor: 'black', // Default text color
          headerTitleStyle: { fontSize: 24, fontWeight: 'bold' },
          headerTitleAlign: 'left',
          headerLeft: null, // Disable back arrow globally
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
            title: 'Generator Hasła', // Custom title for this screen
            headerStyle: { backgroundColor: '#8B4513' }, // Brown color for header
            headerTintColor: 'white', // Set text color to white for better contrast with brown
            headerLeft: null, // Disable back arrow on this screen as well
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
