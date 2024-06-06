import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = () => {
  return (
    <View className="flex-row justify-between items-center  py-2 ">
      <Image
        source={require('@/assets/images/logo.png')}
        className="w-16 h-16"
      />

      <TouchableOpacity className="px-4 py-4 bg-gray-200 rounded-full">
        <Ionicons name="person" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
