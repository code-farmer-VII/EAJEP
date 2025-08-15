import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function SignUpScreen() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <SafeAreaView className="flex-1 bg-purple-700">
      {/* Header Section */}
      <View className="bg-purple-700 items-center rounded-b-3xl "
        style={{paddingTop:20, marginTop:8}}
        >
        <Image 
          source={require("@/assets/images/avatar-add.png")} 
          className="w-20 h-20 mb-3"
        />
        <Text className="text-white font-bold text-2xl">Create Your Account</Text>
        <Text className="text-white text-sm mt-1">Start Your Journey in Ethiopian Aviation</Text>
      </View>

      {/* Form Section */}
      <View className="bg-white flex flex-1"
                style={{borderTopLeftRadius:40,borderTopRightRadius:40, paddingTop:20, marginTop:20}}
      >
      <View className="px-6 mt-4">
        <Text className="text-black font-semibold mb-1">Name</Text>
        <TextInput
          className="border border-gray-300 px-4 py-3 rounded-xl"
          placeholder="Enter your full name"
          value={form.name}
          onChangeText={(text) => setForm({ ...form, name: text })}
          style={{borderRadius:10, padding:10, paddingVertical:15, marginTop:10}}
        />

        <Text className="text-black font-semibold mt-4 mb-1">Email</Text>
        <TextInput
          className="border border-gray-300 px-4 py-3"
          placeholder="Enter your email"
          keyboardType="email-address"
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
          style={{borderRadius:10, padding:10, paddingVertical:15, marginTop:10}}

        />

        <Text className="text-black font-semibold mt-4 mb-1">Phone Number</Text>
        <TextInput
          className="border border-gray-300 rounded-lg px-4 py-3"
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={form.phone}
          onChangeText={(text) => setForm({ ...form, phone: text })}
          style={{borderRadius:10, padding:10, paddingVertical:15, marginTop:10}}

        />

        <Text className="text-black font-semibold mt-4 mb-1">Password</Text>
        <TextInput
          className="border border-gray-300 rounded-lg px-4 py-3"
          placeholder="Enter your password"
          secureTextEntry
          value={form.password}
          onChangeText={(text) => setForm({ ...form, password: text })}
          style={{borderRadius:10, padding:10, paddingVertical:15, marginTop:10}}

        />

        <Text className="text-black font-semibold mt-4 mb-1">Confirm Password</Text>
        <TextInput
          className="border border-gray-300 rounded-lg px-4 py-3"
          placeholder="Enter your confirm password"
          secureTextEntry
          value={form.confirmPassword}
          onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
          style={{borderRadius:10, padding:10, paddingVertical:15, marginTop:10}}

        />
      </View>

      {/* Button Section */}
      <View className="px-6 mt-6">
        <TouchableOpacity 
          className="bg-purple-700 rounded-full items-center"
          style={{paddingVertical: 10}}
          onPress={() => router.push("/(tabs)/Introduction")}
        >
          <Text className="text-white font-bold text-lg">Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Link */}
      <View className="flex-row justify-center mt-4">
        <Text className="text-black">Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/(auth)/SignIn")}>
          <Text className="text-purple-700 font-bold">sign in</Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
}
