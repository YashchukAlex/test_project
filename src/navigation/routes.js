import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator } from '@components';

import NavigationServices from './navigationServices';

import Home from '../screens/Home';
import NoteDetails from '../screens/NoteDetails';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <>
    <HomeStack.Navigator
      screenOptions={({ route }) => ({
        title: route.params && route.params.title,
        headerLeft: route.params && route.params.headerLeft,
        headerRight: route.params && route.params.headerRight,
      })}
    >
      <HomeStack.Screen name="Home" component={Home} options={{ headerStyle: { backgroundColor: '#02C5B4' } }} />
      <HomeStack.Screen
        name="NoteDetails"
        component={NoteDetails}
        options={{ headerStyle: { backgroundColor: '#EFF7F6' } }}
      />
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
      <NavigationContainer
        ref={(navigatorRef) => {
          NavigationServices.setTopLevelNavigator(navigatorRef);
        }}
      >
        <HomeStackScreen />
        <ActivityIndicator isLoading={isLoading} />
      </NavigationContainer>
    </>
  );
};
