import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Tabs } from 'expo-router';

import { Colors } from '../../constants';

function TabBarIcon() {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} />;
}

export default function TabLayout() {
 
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.action,
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />

      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="cutlery" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Orders',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />

    </Tabs>
  );
}
