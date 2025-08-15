import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function SignInScreen() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header Section */}
      <View className="bg-white items-center rounded-b-3xl "
        style={{ paddingTop: 20, marginTop: 8 }}>
        <Image 
          source={require("@/assets/images/avatar.png")} 
          className="w-25 h-25 mb-3"
        />
        <Text className="text-black font-bold text-2xl">Welcome Back !</Text>
        <Text className="text-gray-600 text-sm mt-1 font-medium">Start Your Journey in Ethiopian Aviation</Text>
      </View>

      {/* Form Section */}
      <View className="bg-purple-700 flex flex-1"
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40, paddingTop: 20, marginTop: 20 }}>
        <View className="px-6 mt-4">
          <Text className="text-white font-semibold mb-1">Email</Text>
          <TextInput
            className="border border-white text-white px-4 py-3 rounded-xl placeholder:text-gray-400"
            placeholder="Enter your email"
            keyboardType="email-address"
            value={form.email}
            onChangeText={(text) => setForm({ ...form, email: text })}
            style={{ borderRadius: 10, padding: 10, paddingVertical: 15, marginTop: 10 }}
          />

          <Text className="text-white font-semibold mt-4 mb-1">Password</Text>
          <TextInput
            className="border border-white rounded-lg px-4 py-3 text-white placeholder:text-gray-400"
            placeholder="Enter your password"
            secureTextEntry
            value={form.password}
            onChangeText={(text) => setForm({ ...form, password: text })}
            style={{ borderRadius: 10, padding: 10, paddingVertical: 15, marginTop: 10 }}
          />
        </View>

        {/* Forgot Password */}
        <View className="px-6 mt-6 flex-row justify-end">
          <TouchableOpacity onPress={() => router.push("/(auth)/SignUp")}>
            <Text className="text-white underline font-bold">Reset it here</Text>
          </TouchableOpacity>
        </View>

        {/* Button Section */}
        <View className="px-6 mt-6">
          <TouchableOpacity 
            className="bg-purple-500 rounded-full items-center border border-gray-200"
            style={{ paddingVertical: 10 }}
          >
            <Text className="text-white font-bold text-lg">Sign in</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up Link */}
        <View className="flex-row justify-center mt-4">
          <Text className="text-gray-400">Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/SignUp")}> 
            <Text className="text-white underline font-bold">sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}