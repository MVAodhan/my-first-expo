import { useState, useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import React from 'react';

import { Audio } from 'expo-av';
import { useAssets } from 'expo-asset';

import { Button, Text, Center, Box } from 'native-base';

export default function Details({ navigation }) {
  const [sound, setSound] = useState();

  const [assets, error] = useAssets([
    require('../assets/fbf.mp3'),
    require('../assets/nyi.mp3'),
  ]);

  const playSound = async (assetNum) => {
    console.log(assetNum);
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(assets[assetNum]);
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
        <Button onPress={() => playSound(0)}>Play Sound</Button>
        <Button mt="20px" onPress={() => playSound(1)}>
          Play Sound
        </Button>
      </Center>
    </Box>
  );
}

const styles = StyleSheet.create({});
