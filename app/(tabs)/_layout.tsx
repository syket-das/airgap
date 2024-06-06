import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,

        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          backgroundColor: Colors[colorScheme ?? 'light'].lightGray,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,

          maxWidth: '60%',
          width: '100%',
          marginHorizontal: '20%',

          borderRadius: 20,
          height: 65,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="applications/index"
        options={{
          title: 'Applications',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'file-tray-full' : 'file-tray-full-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="candidate/index"
        options={{
          title: 'Candidate',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'person' : 'person-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="board-member/index"
        options={{
          title: 'Board Member',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'people' : 'people-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'grid' : 'grid-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="all-room/index"
        options={{
          title: 'All Room',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'open' : 'open-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="board-room/index"
        options={{
          title: 'Board Room',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'easel' : 'easel-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="interview/index"
        options={{
          title: 'Interview',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'reader' : 'reader-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'settings' : 'settings-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
