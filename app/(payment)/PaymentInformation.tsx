// App.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { router } from "expo-router";
import CBE from "@/assets/CBE.png"; // Local image import

type Role = {
  id: number;
  label: string;
  subLabel?: string;
};

export default function App() {
  const [selectedRole, setSelectedRole] = useState<number | null>(null);
  const [transactionRef, setTransactionRef] = useState<string>("");

  const roles: Role[] = [
    { id: 1, label: "Pilot" },
    { id: 2, label: "Cabin Crew (Hosts)" },
    {
      id: 3,
      label: "Maintenance Technician",
      subLabel:
        "( Cabin maintenance, Air frame Maintenance, Power plant, Aircraft Maintenance Technician (AMT) and Technician )",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white px-4 py-6">
      {/* Title */}
      <Text className="text-base font-semibold mb-4">
        Select Entrance Preparation
      </Text>

      {/* Role Selection */}
      {roles.map((role) => (
        <TouchableOpacity
          key={role.id}
          onPress={() => setSelectedRole(role.id)}
          className={`flex-row items-start border rounded-lg p-3 mb-3 ${
            selectedRole === role.id
              ? "border-purple-500"
              : "border-gray-300"
          }`}
        >
          <View
            className={`w-5 h-5 rounded-full border-2 mr-3 mt-1 ${
              selectedRole === role.id
                ? "border-purple-500 bg-purple-500"
                : "border-gray-400"
            }`}
          />
          <View className="flex-1">
            <Text className="text-sm font-medium">{role.label}</Text>
            {role.subLabel && (
              <Text className="text-xs text-gray-600 mt-1">
                {role.subLabel}
              </Text>
            )}
          </View>
        </TouchableOpacity>
      ))}

      {/* Payment Section */}
      <Text className="text-base font-semibold mt-6 mb-3">Payment</Text>

      {/* CBE Card */}
      <View className="flex-row items-center border rounded-lg p-3 mb-4 shadow">
        <Image
          source={CBE} // ✅ Fixed: no uri wrapper for local image
          style={{ width: 40, height: 40, marginRight: 12 }} // Style added for Image
        />
        <Text className="text-sm font-medium">
          CBE{"\n"}10003453246457
        </Text>
      </View>

      {/* Payment Instruction */}
      <View className="bg-yellow-100 rounded-lg p-3 mb-5">
        <Text className="text-xs text-gray-800">
          After paying 500 birr using the CBE or Telebirr app, take the
          transaction ID number, enter it into the transaction ID field, and
          then click the submit payment button.
        </Text>
      </View>

      {/* Transaction Input */}
      <Text className="text-sm font-medium mb-2">
        Transaction Reference Number
      </Text>
      <TextInput
        placeholder="Enter your transaction reference number"
        value={transactionRef}
        onChangeText={setTransactionRef}
        className="border border-gray-300 rounded-lg px-3 py-2 mb-5"
      />

      {/* Submit Button */}
      <TouchableOpacity
        className="bg-purple-600 rounded-lg p-3 mb-6"
        onPress={() => router.push("/PaymentApproval")} // Navigate to SignIn after payment submission
      >
        <Text className="text-center text-white font-semibold">
          Submit Payment
        </Text>
      </TouchableOpacity>

      {/* Contact Section */}
      <View className="bg-purple-100 rounded-lg p-3 mb-8">
        <Text className="text-sm text-center">
          For more you can contact us via:{"\n"}
          telegram:{" "}
          <Text className="text-blue-600 underline">Click here!</Text>
          {"\n"}
          phone: 0924900514
        </Text>
      </View>
    </ScrollView>
  );
}
