import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import React from 'react';

import { Audio } from 'expo-av';
import { useAssets } from 'expo-asset';

import { Button, HStack, Center, Box } from 'native-base';

export default function Details({ navigation }) {
  const [sound, setSound] = useState();

  const [assets, error] = useAssets([
    require('../assets/fbf.mp3'),
    require('../assets/jasha.mp3'),
    require('../assets/byebye.mp3'),
  ]);

  const playSound = async (assetNum) => {
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
      <HStack mt="10px" justifyContent="space-around" alignItems="center">
        <Button h="50px" onPress={() => playSound(0)}>
          White Claw Gabe
        </Button>
        <Button h="50px" onPress={() => playSound(1)}>
          Jason x Trisha laugh
        </Button>
      </HStack>
      <HStack mt="10px" justifyContent="space-around" alignItems="center">
        <Button h="50px" onPress={() => playSound(2)}>
          Trump Bye-Bye
        </Button>
      </HStack>
    </Box>
  );
}

const styles = StyleSheet.create({});
