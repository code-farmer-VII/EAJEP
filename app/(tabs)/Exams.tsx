// Exam.tsx
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const Exam = () => {
  return (
    <ScrollView className="flex-1 bg-white px-6 py-8">
      <Text className="text-2xl font-extrabold text-center mb-6 text-purple-700">
        Choose Your Exam
      </Text>

      <View className="space-y-4">
        {/* Pilot */}
        <TouchableOpacity className="bg-purple-100 rounded-2xl p-4 flex-row items-center shadow-md my-4 border-2 border-purple-700">
          <FontAwesome5 name="fighter-jet" size={28} color="#6B21A8" className="mr-4" />
          <View className="flex-1">
            <Text className="text-purple-700 font-bold text-lg">Pilot</Text>
            <Text className="text-gray-600 text-sm">
              Practice exams for aspiring pilots.
            </Text>
          </View>
          <MaterialCommunityIcons name="arrow-right" size={24} color="#6B21A8" />
        </TouchableOpacity>

        {/* Cabin Crew */}
        <TouchableOpacity className="bg-purple-100 rounded-2xl p-4 flex-row items-center shadow-md mb-4 border-2 border-purple-700">
          <FontAwesome5 name="user-tie" size={28} color="#6B21A8" className="mr-4" />
          <View className="flex-1">
            <Text className="text-purple-700 font-bold text-lg">Cabin Crew and Hostess</Text>
            <Text className="text-gray-600 text-sm">
              Prepare with cabin crew and Hostes related exams.
            </Text>
          </View>
          <MaterialCommunityIcons name="arrow-right" size={24} color="#6B21A8" />
        </TouchableOpacity>


        {/* Aircraft Maintenance */}
        <TouchableOpacity className="bg-purple-100 rounded-2xl p-4 flex-row items-center shadow-md mb-4 border-2 border-purple-700">
          <FontAwesome5 name="tools" size={28} color="#6B21A8" className="mr-4" />
          <View className="flex-1">
            <Text className="text-purple-700 font-bold text-lg">Aircraft Maintenance</Text>
            <Text className="text-gray-600 text-sm">
              Practice exams for aircraft maintenance engineers (Power plant engineer,Aircraft stractural engineer, Airframe engineer, Aircraft maintenance technician, Mechanichal Enginnering ).
            </Text>
          </View>
          <MaterialCommunityIcons name="arrow-right" size={24} color="#6B21A8" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Exam;
