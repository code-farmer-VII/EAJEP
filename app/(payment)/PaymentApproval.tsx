// PaymentVerification.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import clock from "@/assets/clock.png"; // Local image import
import telegram from "@/assets/telegram.png"; // Local image import

export default function PaymentVerification() {
  return (
    <View className="flex-1 bg-white items-center justify-center px-6">
      {/* Clock Icon */}
      <View className="mb-4">
        <Image
          source={clock} // ✅ Fixed: pass local image directly
          style={{ width: 48, height: 48 }} // Explicit size for Image
        />
      </View>

      {/* Title */}
      <Text className="text-lg font-semibold mb-2">Payment Verification</Text>

      {/* Subtitle */}
      <Text className="text-center text-gray-500 mb-6">
        Your payment is being verified. Please allow{"\n"}up to 30 minutes.
      </Text>

      {/* Loading Spinner */}
      <ActivityIndicator size="large" color="#7C3AED" style={{ marginBottom: 24 }} />

      {/* Alert Box */}
      <View className="bg-yellow-200 rounded-lg p-3 mb-5 w-full">
        <Text className="text-center text-xs text-gray-800">
          If it's taking too long, please reach out{"\n"}to our support team on Telegram.
        </Text>
      </View>

      {/* Contact Button */}
      <TouchableOpacity className="bg-purple-600 flex-row items-center justify-center rounded-full px-6 py-3">
        <Image
          source={telegram} // ✅ Fixed: pass local image directly
          style={{ width: 20, height: 20, marginRight: 8 }}
        />
        <Text className="text-white font-semibold text-sm">
          Contact us on Telegram
        </Text>
      </TouchableOpacity>
    </View>
  );
}
