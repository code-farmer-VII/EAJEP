// WelcomeScreen.tsx
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome5, MaterialIcons, Entypo } from "@expo/vector-icons";

export default function WelcomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white px-6 py-8">
      <View className="bg-purple-50 rounded-2xl p-6">
        {/* Title */}
        <Text className="text-xl font-extrabold text-center mb-2">
          Ethiopia Aviation Entrance Preparation
        </Text>

        {/* Subtitle */}
        <Text className="text-center text-gray-500 mb-6">
          Your Ultimate Exam Companion!
        </Text>

        {/* Features */}
        <View className="mb-6">
          <Text className="text-purple-700 font-semibold">
            Comprehensive Exam Bank
          </Text>
          <Text className="text-gray-500 mb-4 text-sm">
            Access 500+ practice exams covering all key aviation subjects
          </Text>

          <Text className="text-purple-700 font-semibold">
            Extensive Interview Questions
          </Text>
          <Text className="text-gray-500 mb-4 text-sm">
            Prepare with 200+ real interview questions commonly asked in
            Ethiopian Aviation Academy and airline selection processes.
          </Text>

          <Text className="text-purple-700 font-semibold">
            Simulated Test Experience
          </Text>
          <Text className="text-gray-500 text-sm">
            Practice with real-time mock exams that simulate the actual test
            environment.
          </Text>
        </View>

        {/* Highlighted Text */}
        <Text className="text-center text-gray-800 font-bold mb-6">
          Your dream of becoming an aviator starts here!{"\n"}
          <Text className="font-bold">
            Stay ahead with Ethiopia’s most trusted aviation prep app.
          </Text>
        </Text>

        {/* Start Button */}
        <TouchableOpacity className="bg-black rounded-full py-3 px-6 mb-6">
          <Text className="text-center text-white font-semibold text-base">
            Start
          </Text>
        </TouchableOpacity>

        {/* Cards with Icons and Descriptions */}
        <View className="space-y-4">
          {/* Exams Card */}
          <TouchableOpacity className="bg-purple-100 rounded-2xl my-4 p-4 flex-row items-center shadow-md border-purple-700 border-2">
            <FontAwesome5 name="book" size={28} color="#6B21A8" className="mr-4" />
            <View className="flex-1">
              <Text className="text-purple-700 font-bold text-lg">Exams</Text>
              <Text className="text-gray-600 text-sm">
                Access 500+ practice exams covering all aviation subjects.
              </Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={20} color="#6B21A8" />
          </TouchableOpacity>

          {/* Interview Card */}
          <TouchableOpacity className="bg-purple-100 mb-4 rounded-2xl p-4 flex-row items-center shadow-md border-purple-700 border-2">
            <Entypo name="chat" size={28} color="#6B21A8" className="mr-4" />
            <View className="flex-1">
              <Text className="text-purple-700 font-bold text-lg">Interview</Text>
              <Text className="text-gray-600 text-sm">
                Prepare with 200+ real interview questions for aviation selections.
              </Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={20} color="#6B21A8" />
          </TouchableOpacity>

          {/* Notes Card */}
          <TouchableOpacity className="bg-purple-100 rounded-2xl p-4 flex-row items-center shadow-md border-purple-700 border-2">
            <FontAwesome5 name="sticky-note" size={28} color="#6B21A8" className="mr-4" />
            <View className="flex-1">
              <Text className="text-purple-700 font-bold text-lg">Notes</Text>
              <Text className="text-gray-600 text-sm">
                Read important tips and aviation notes to boost your preparation.
              </Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={20} color="#6B21A8" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
