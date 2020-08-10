import React, { useEffect } from 'react';
import { Easing, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator } from '@components';

import Home from '../screens/Home';
import LetterDetails from '../screens/LetterDetails';

const HomeStack = createStackNavigator();

const headerStyle = {
  height: 60,
};

const config = {
  animation: 'timing',
  config: {
    duration: 1200,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
    useNativeDriver: true,
  },
};

const HomeStackScreen = () => (
  <>
    <HomeStack.Navigator
      screenOptions={({ route }) => {
        const { params } = route;
        return {
          headerLeft: params && params.headerLeft,
          headerRight: params && params.headerRight,
          headerTitle: params && params.headerTitle,
          transitionSpec: {
            open: config,
            close: config,
          },
        };
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerStyle: { ...headerStyle, backgroundColor: '#02C5B4' } }}
      />
      <HomeStack.Screen name="LetterDetails" component={LetterDetails} />
    </HomeStack.Navigator>
  </>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <NavigationContainer>
        <HomeStackScreen />
        <ActivityIndicator isLoading={isLoading} />
      </NavigationContainer>
    </>
  );
};
