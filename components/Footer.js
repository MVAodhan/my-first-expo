import { StyleSheet } from 'react-native';
import React from 'react';

import { Box, Center, HStack, Pressable, Icon, Text } from 'native-base';

import { Ionicons } from '@expo/vector-icons';

export default function Footer({ navigation }) {
  return (
    <Box bg="white" width="100%" alignSelf="center">
      <Center></Center>
      <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          opacity={1}
          py="3"
          flex={1}
          onPress={() => navigation.navigate('Home')}
        >
          <Center>
            <Icon as={Ionicons} name="md-home" color="white" size="sm" />
            <Text color="white" fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
}

const styles = StyleSheet.create({});
