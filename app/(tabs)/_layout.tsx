import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Tabs, router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#8200db',
        headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 15 }}
            onPress={() => router.push('/profile')} // Navigate to your profile page
          >
            <FontAwesome name="user-circle" size={28} color="#8200db" />
          </TouchableOpacity>
        ),
      }}
    >
      <Tabs.Screen
        name="Introduction"
        options={{
          title: 'Introduction',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Exams"
        options={{
          title: 'Exams',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="edit" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Interview"
        options={{
          title: 'Interview',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="microphone" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notes"
        options={{
          title: 'Notes',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="sticky-note" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
