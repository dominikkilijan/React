import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, ScrollView } from 'react-native';
import styles, { switchColorsPass } from './styles';

const PasswordGenerator = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [upperCaseOnly, setUpperCase] = useState(false);
  const [lowerCaseOnly, setLowerCase] = useState(false);
  const [specialOnly, setSpecial] = useState(false);
  const [numbersOnly, setNumbers] = useState(false);
  const [passwordLength, setPasswordLength] = useState(10);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    special: true,
  });

  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const special = '!@#\$%^&*()';
    let chars = '';

    if (options.uppercase) chars += uppercase;
    if (options.lowercase) chars += lowercase;
    if (options.numbers) chars += numbers;
    if (options.special) chars += special;

    if (chars) {
      const generatedPassword = Array.from({ length: passwordLength }, () =>
        chars.charAt(Math.floor(Math.random() * chars.length))
      ).join('');
      setPassword(generatedPassword);
    }
  };

  const toggleOption = (option) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  const areAllOptionsOff = !options.uppercase && !options.lowercase && !options.numbers && !options.special;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.topRightButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RandomNumberGenerator')}
            style={styles.navButton}
          >
            <Text style={styles.navButtonText}>Generuj liczbę</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.passwordDisplay}>{password || 'Haslo123'}</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Długość hasła:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="10"
            value={passwordLength.toString()}
            onChangeText={(text) => setPasswordLength(parseInt(text) || 10)}
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Wielkie litery</Text>
          <Switch
            value={options.uppercase}
            onValueChange={(value) =>
            {toggleOption('uppercase');
            setUpperCase(value);
            }}
            trackColor={switchColorsPass.trackColor}
            thumbColor={upperCaseOnly ? switchColorsPass.thumbColorTrue : switchColorsPass.thumbColorFalse}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Małe litery</Text>
          <Switch
            value={options.lowercase}
            onValueChange={(value) =>
            {toggleOption('lowercase');
            setLowerCase(value)}}
            trackColor={switchColorsPass.trackColor}
            thumbColor={lowerCaseOnly ? switchColorsPass.thumbColorTrue : switchColorsPass.thumbColorFalse}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Liczby</Text>
          <Switch
            value={options.numbers}
            onValueChange={(value) =>
            {toggleOption('numbers');
            setNumbers(value);}}
            trackColor={switchColorsPass.trackColor}
            thumbColor={numbersOnly ? switchColorsPass.thumbColorTrue : switchColorsPass.thumbColorFalse}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Znaki specjalne</Text>
          <Switch
            value={options.special}
            onValueChange={(value) =>
            {toggleOption('special');
            setSpecial(value);}}
            trackColor={switchColorsPass.trackColor}
            thumbColor={specialOnly ? switchColorsPass.thumbColorTrue : switchColorsPass.thumbColorFalse}
          />
        </View>

        {areAllOptionsOff && (
          <Text style={styles.warningText}>Włącz przynajmniej jedną opcję, aby wygenerować hasło.</Text>
        )}

        <TouchableOpacity style={styles.buttonPass} onPress={generatePassword}>
          <Text style={styles.buttonText}>Generuj</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default PasswordGenerator;