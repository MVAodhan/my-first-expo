import { StyleSheet } from 'react-native';
import React from 'react';

import { Button, Text, Center, Box } from 'native-base';

export default function Details({ navigation }) {
  return (
    <Box width="100%" height="100%">
      <Center width="100%" height="100%">
        <Text>Details</Text>
        <Button onPress={() => navigation.goBack()}>Go Home</Button>
      </Center>
    </Box>
  );
}

const styles = StyleSheet.create({});
