import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './components/Home';
import Details from './components/Details';

import { NativeBaseProvider } from 'native-base';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} height="100%" width="100%" />
          <Tab.Screen name="Details" component={Details} />
        </Tab.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
