import { useState, useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import React from 'react';

import { Audio } from 'expo-av';

import { Button, Text, Center, Box } from 'native-base';

export default function Details({ navigation }) {
  const [sound, setSound] = useState();

  const playSound = async (id) => {
    console.log(id);
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/nyi.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <Box width="100%" height="100%">
      <Center width="100%" height="100%">
        <Text>Details</Text>

        <Button onPress={() => playSound('idSound')}>Play Sound</Button>
      </Center>
    </Box>
  );
}

const styles = StyleSheet.create({});
