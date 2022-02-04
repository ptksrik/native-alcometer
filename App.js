import React, { useState } from 'react';
import { Text, View, TextInput, Button, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Radiobutton from './components/Radiobutton'
import style from './Style';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(1);
  const [gender, setGender] = useState('male');
  const [time, setTime] = useState(0);
  const [alcoholLevel, setAlcoholLevel] = useState(0);


  // Genders for radio buttons
  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];

  // Bottles array
  const bottlesArray = Array.from({ length: 15 }, (x, i) => i + 1);

  // Hours array
  const hoursArray = Array.from({ length: 10 }, (x, i) => i);

  // text colors corresponding alcohol levels
  const color =
    alcoholLevel <= 0.5 ? '#82ec0c'
      : alcoholLevel >= 1.0 ? '#EC0C0C'
        : '#ECEC0C';

  // Function to alert if weight input is missing
  const inputAlert = () => {
    Alert.alert(
      'Missing input',
      'Please enter your weight!')
  }

  // Calculate alcohol level
  const runAlcometer = () => {
    if (weight === '' || weight === '0') {
      inputAlert();
      return
    }

    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - burning * time;
    let result = 0;

    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7);
    } else {
      result = gramsLeft / (weight * 0.6);
    }
    if (result < 0) {
      result = 0;
    }
    setAlcoholLevel(result)
  }


  return (
    <ScrollView style={style.container}>
      <View>
        <Text style={style.heading}>
          Alcometer
        </Text>
      </View>
      <View>
        <Text style={style.label}>
          Weight
        </Text>
        <TextInput
          style={style.textInput}
          placeholder='In kilos'
          keyboardType='number-pad'
          onChangeText={(text) => setWeight(text)} />
      </View>
      <View>
        <Text style={style.label}>
          Bottles
        </Text>
        <Picker
          selectedValue={bottles}
          onValueChange={(value) => setBottles(value)}
        >
          {bottlesArray.map((obj, i) => (
            <Picker.Item
              key={i}
              value={obj}
              label={obj.toString()} //+ ' bottles'
            ></Picker.Item>
          ))}
        </Picker>
      </View>
      <View>
        <Text style={style.label}>
          Time
        </Text>
        <Picker
          selectedValue={time}
          onValueChange={(value) => setTime(value)}
        >
          {hoursArray.map((obj, i) => (
            <Picker.Item
              key={i}
              value={obj}
              label={obj.toString()} //+ ' hours'
            ></Picker.Item>
          ))}
        </Picker>
      </View>
      <View>
        <Text style={style.label}>
          Gender
        </Text>
        <Radiobutton
          options={genders}
          onPress={(value) => { setGender(value) }}
          circleColor={{ backgroundColor: '#2196F3' }}
          initialValue={'male'}
        />
      </View>
      <View>
        <Text style={[style.result, { color }]}>
          {alcoholLevel.toFixed(2)}
        </Text>
        <Button title='Calculate' onPress={() => runAlcometer()}></Button>
      </View>
    </ScrollView >
  );
}