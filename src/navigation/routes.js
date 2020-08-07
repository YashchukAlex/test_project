import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator } from '@components';

import Home from '../screens/Home';
import NoteDetails from '../screens/NoteDetails';

const HomeStack = createStackNavigator();

const headerStyle = {
  height: 60,
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
        };
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerStyle: { ...headerStyle, backgroundColor: '#02C5B4' } }}
      />
      <HomeStack.Screen name="NoteDetails" component={NoteDetails} />
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
