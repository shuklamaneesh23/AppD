import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const randomWords = ['apple', 'banana', 'carrot', 'dog', 'elephant', 'fish', 'giraffe', 'horse', 'igloo', 'jacket'];

export default function App(props) {
  const [randomWord, setRandomWord] = useState('');

  const navigation = useNavigation();

  const generateRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * randomWords.length);
    setRandomWord(randomWords[randomIndex]);
  };
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'yellow' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Random Word: {randomWord}</Text>
      <Button title="Generate Random Word" onPress={generateRandomWord} />
      <Button title='Go to Experiment Screen' onPress={() => props.navigation.navigate('ExperimentScreen',{random: randomWord})} />
    </View>
  );
}
