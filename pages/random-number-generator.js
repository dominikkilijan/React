import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, ScrollView } from 'react-native';
import styles, { switchColorsNum } from './styles';

const RandomNumberGenerator = ({ navigation }) => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [evenOnly, setEvenOnly] = useState(false);
  const [oddOnly, setOddOnly] = useState(false);
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const generateRandomNumber = () => {
    let min = parseInt(minValue) || 1;
    let max = parseInt(maxValue) || 100;

    min = Math.max(Math.min(min, 9999999), -999999);
    max = Math.max(Math.min(max, 9999999), -999999);

    if (min > max) {
      [min, max] = [max, min];
    }

    if (min === max) {
      max += 1;
    }

    setMinValue(min.toString());
    setMaxValue(max.toString());

    let number;
    do {
      number = Math.floor(Math.random() * (max - min + 1)) + min;
    } while ((evenOnly && number % 2 !== 0) || (oddOnly && number % 2 === 0));

    setRandomNumber(number);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.topRightButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PasswordGenerator')}
            style={styles.navButtonPass}
          >
            <Text style={styles.navButtonText}>Generuj hasło</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.numberDisplay}>{randomNumber !== null ? randomNumber : '0'}</Text>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Tylko parzyste</Text>
          <Switch
            value={evenOnly}
            onValueChange={(value) => {
              setEvenOnly(value);
              if (value) setOddOnly(false);
            }}
            trackColor={switchColorsNum.trackColor}
            thumbColor={evenOnly ? switchColorsNum.thumbColorTrue : switchColorsNum.thumbColorFalse}
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>Tylko nieparzyste</Text>
          <Switch
            value={oddOnly}
            onValueChange={(value) => {
              setOddOnly(value);
              if (value) setEvenOnly(false);
            }}
            trackColor={switchColorsNum.trackColor}
            thumbColor={oddOnly ? switchColorsNum.thumbColorTrue : switchColorsNum.thumbColorFalse}
          />
        </View>

        <Text style={styles.rangeText}>Zakres liczb:</Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Min</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="1"
              value={minValue}
              onChangeText={setMinValue}
              clearButtonMode="always"
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Max</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="100"
              value={maxValue}
              onChangeText={setMaxValue}
              clearButtonMode="always"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={generateRandomNumber}>
          <Text style={styles.buttonText}>Generuj</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default RandomNumberGenerator;
