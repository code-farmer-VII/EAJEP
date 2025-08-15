import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { FontAwesome5 } from '@expo/vector-icons';

export default function MaintenanceExamScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <TouchableOpacity className="absolute top-6 left-4" onPress={() => router.back()}>
        <FontAwesome5 name="arrow-left" size={24} color="#6434C4" />
      </TouchableOpacity>
      
      <View className="items-center mt-10 w-full h-96">
        <Text className="text-purple-700 font-bold text-2xl">EthioSky Academy</Text>
        <Image source={require("@/assets/images/maintenance.png")} className="h-60 mt-4" />
      </View>
      
      <View className="flex-row justify-center mt-4">
        <View className="w-6 h-1 bg-gray-300 rounded-full mx-1" />
        <View className="w-6 h-1 bg-gray-300 rounded-full mx-1" />
        <View className="w-6 h-1 bg-gray-300 rounded-full mx-1" />
        <View className="w-6 h-1 bg-purple-700 rounded-full mx-1" />
      </View>
      
      <View className="items-center mt-6 px-6">
        <Text className="text-black font-bold text-xl">Maintenance Entrance Exam</Text>
        <Text className="text-gray-500 text-center mt-2 text-base">
          Prove your expertise in aviation systems and safety. Start your career in aircraft maintenance.
        </Text>
      </View>
      
      <View className="mt-10 px-6">
        <TouchableOpacity 
          className="bg-purple-700 py-3 rounded-full items-center"
          onPress={() => router.push("/splashScreen3")}
        >
          <Text className="text-white font-bold text-lg">Next</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="border border-gray-300 py-3 rounded-full items-center mt-4"
          onPress={() => router.push("/(auth)/SignUp")}
        >
          <Text className="text-black font-bold text-lg">Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
