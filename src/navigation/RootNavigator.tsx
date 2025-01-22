import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import { COLORS } from '../theme';
import TransferScreen from '../screens/transfer/TransferScreen';
import TransferSuccess from '../screens/transferSuccess/TransferSuccess';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.PRIMARY,
          },
          headerTintColor: COLORS.WHITE,
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: '' }} 
        />
        <Stack.Screen 
          name="Transfer" 
          component={TransferScreen} 
          options={{ 
            title: 'New Transfer',
          }} 
        />
        <Stack.Screen 
          name="TransferSuccess" 
          component={TransferSuccess} 
          options={{ 
            title: 'Transfer Success',
            headerShown: false,
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export type RootStackParamList = {
  Home: undefined;
  Transfer: undefined;
  TransferSuccess: {
    transactionId: any;
    amount: number;
    recipientName: string;
    note: string;
  };
};