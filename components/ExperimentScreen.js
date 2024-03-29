import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const colorOptions = [
  { label: 'Black', value: 'black' },
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Orange', value: 'orange' },
  { label: 'Purple', value: 'purple' },
  { label: 'Pink', value: 'pink' },
  { label: 'Brown', value: 'brown' },
  { label: 'White', value: 'white' },
  { label: 'Gray', value: 'gray' },
  { label: 'Cyan', value: 'cyan' },
  { label: 'Magenta', value: 'magenta' },
  { label: 'Turquoise', value: 'turquoise' },
  { label: 'Lavender', value: 'lavender' },
  { label: 'Beige', value: 'beige' }
];

export default function DisplayScreen({ route }) {
  const { word } = route.params;
  const [textCustomization, setTextCustomization] = useState({
    fontSize: 16,
    color: 'black',
    fontFamily: 'Arial',
    text: '',
  });

  useEffect(() => {
    setTextCustomization({ ...textCustomization, text: word });
  }, [word]);

  const applyCustomizations = (customizations) => {
    setTextCustomization({ ...textCustomization, ...customizations });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: textCustomization.fontSize, color: textCustomization.color, fontFamily: textCustomization.fontFamily }]}>
        {textCustomization.text}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter custom text"
          onChangeText={(text) => applyCustomizations({ text })}
          value={textCustomization.text}
        />
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={textCustomization.fontSize}
          style={styles.picker}
          onValueChange={(itemValue) => applyCustomizations({ fontSize: parseInt(itemValue) })}
        >
          {[12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 36, 38, 40].map((size, index) => (
            <Picker.Item key={index} label={size.toString()} value={size.toString()} />
          ))}
        </Picker>
        <Picker
          selectedValue={textCustomization.color}
          style={styles.picker}
          onValueChange={(itemValue) => applyCustomizations({ color: itemValue })}
        >
          {colorOptions.map((option, index) => (
            <Picker.Item key={index} label={option.label} value={option.value} />
          ))}
        </Picker>
        <Picker
          selectedValue={textCustomization.fontFamily}
          style={styles.picker}
          onValueChange={(itemValue) => applyCustomizations({ fontFamily: itemValue })}
        >
          <Picker.Item label="Arial" value="Arial" />
          <Picker.Item label="Times New Roman" value="Times New Roman" />
          <Picker.Item label="Courier New" value="Courier New" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Set background color
  },
  text: {
    marginTop: 20,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: 200,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  picker: {
    height: 50,
    width: 100,
    marginBottom: 20,
  },
});
