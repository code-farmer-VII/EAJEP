import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="Introduction"
        options={{
          title: 'Introduction',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />


      <Tabs.Screen
        name="Exam"
        options={{
          title: 'Exam',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="pencil" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Interview"
        options={{
          title: 'Interview',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="comments" color={color} />,
        }}
      />
      <Tabs.Screen
        name="About"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="info-circle" color={color} />,
        }}
      />
    </Tabs>
  );
}
