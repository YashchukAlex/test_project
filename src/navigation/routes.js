import React, { useEffect, useState } from 'react';
import { Easing, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ActivityIndicator, Drawer } from '@components';
import { constants } from '@constants';

import Home from '../screens/Home';
import LetterDetails from '../screens/LetterDetails';

const DrawerNavigator = createDrawerNavigator();
const HomeStack = createStackNavigator();

const drawerStyle = {
  width: constants.dimensionsWindow.width * 0.7,
};
const headerStyle = {
  height: 60,
};

const config = {
  animation: 'timing',
  config: {
    duration: 1000,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
    useNativeDriver: true,
  },
};

const HomeStackNavigator = () => (
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
    <HomeStack.Screen
      name="LetterDetails"
      component={LetterDetails}
      options={{ headerStyle: { ...headerStyle, backgroundColor: '#EFF7F6' } }}
    />
  </HomeStack.Navigator>
);

const DrawerNavigatorContainer = ({ activeItem, changeActiveItem, navigation }) => {
  return (
    <DrawerNavigator.Navigator
      drawerContent={({ navigation }) => (
        <Drawer activeItem={activeItem} changeActiveItem={changeActiveItem} navigation={navigation} />
      )}
      drawerStyle={drawerStyle}
    >
      <DrawerNavigator.Screen
        name="Home"
        component={HomeStackNavigator}
        options={({ route }) => ({ gestureEnabled: route.name === 'Home' ? true : false })}
      />
    </DrawerNavigator.Navigator>
  );
};

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeItem, changeActiveItem] = useState(-1); //active item on drawer

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <NavigationContainer>
        <DrawerNavigatorContainer activeItem={activeItem} changeActiveItem={(active) => changeActiveItem(active)} />
        <ActivityIndicator isLoading={isLoading} />
      </NavigationContainer>
    </>
  );
};
