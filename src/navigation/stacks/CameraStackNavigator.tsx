import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import CameraScreen from '../../screens/CameraScreen';

export type RootStackParamList = {
  Camera: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Camera'>;

const CameraStack = createStackNavigator<RootStackParamList>();

const CameraStackNavigator = () => {
  return (
    <CameraStack.Navigator>
      <CameraStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{headerShown: false}}
      />
    </CameraStack.Navigator>
  );
};

export default CameraStackNavigator;
