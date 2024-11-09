import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PasswordGenerator = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TODO: Generowanie haseł</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default PasswordGenerator;
