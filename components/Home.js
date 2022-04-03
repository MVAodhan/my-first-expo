import { StyleSheet } from 'react-native';
import React from 'react';

import { Button, Text, Center, Box } from 'native-base';

export default function Home({ navigation }) {
  return (
    <Box width="100%" height="100%">
      <Center width="100%" height="100%">
        <Text>Home</Text>
        <Button onPress={() => navigation.navigate('Details')}>
          Go to Details
        </Button>
      </Center>
    </Box>
  );
}

const styles = StyleSheet.create({});
