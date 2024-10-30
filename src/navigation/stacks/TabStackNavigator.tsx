import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeStackNavigator from '../stacks/HomeStackNavigator';

const Tab = createBottomTabNavigator();

type TabBarIconProps = {
  focused: boolean;
  size: number;
  color?: string;
};

const HomeIcon: React.FC<TabBarIconProps> = ({ focused, size }) => (
  <Icon name="home" size={size} color={focused ? 'blue' : 'gray'} />
);

const ScanIcon: React.FC<TabBarIconProps> = ({ focused, size }) => (
  <Icon name={focused ? 'camera' : 'camera-retro'} size={size} color={focused ? 'blue' : 'gray'} />
);

const TabStackNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: (props) => <HomeIcon {...props} />,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={HomeStackNavigator} // Placeholder for Scan functionality
        options={{
          tabBarIcon: (props) => <ScanIcon {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStackNavigator;
