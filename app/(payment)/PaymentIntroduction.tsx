import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Carousel from "react-native-reanimated-carousel";
import { router } from "expo-router";


// ✅ Import images (no .uri needed)
import bgimg1 from "@/assets/Frame 4.png";
import bgimg2 from "@/assets/Frame 7.png";
import bgimg3 from "@/assets/Frame 6.png";

const { width } = Dimensions.get("window");

// ✅ Store local image references directly
const slides = [
  {
    id: "1",
    bgImage: bgimg1,
    title: "Ace Your Pilot Entrance with Confidence!",
    subtitle:
      "Well prepared entrance Examination and Interview Questions",
    link: "Start Prepare",
  },
  {
    id: "2",
    bgImage: bgimg2,
    title: "Ace Your Cabin Crew (Hosts) with Confidence!",
    subtitle:
      "Well prepared entrance Examination and Interview Questions",
    link: "Start Prepare",
  },
  {
    id: "3",
    bgImage: bgimg3,
    title: "Ace Your Maintenance Entrance with Confidence!",
    subtitle:
      "Well prepared entrance Examination and Interview Questions",
    link: "Start Prepare",
  },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <ScrollView className="flex-1 bg-white pt-20">
      <StatusBar style="dark" />

      {/* Auto Slider */}
      <Carousel
        loop
        width={width}
        height={180}
        autoPlay
        autoPlayInterval={3000}
        data={slides}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={({ item }) => (
          <ImageBackground
            source={item.bgImage} // ✅ Directly use imported image
            style={{
              width: width - 32,
              height: 180,
              marginHorizontal: 16,
              borderRadius: 16,
              overflow: "hidden",
              padding: 16,
              flexDirection: "column",
              justifyContent: "center",
            }}
            resizeMode="cover"
          >
            <Text className="text-lg font-bold text-white w-2/3">
              {item.title}
            </Text>
            <Text className="text-sm text-white mt-2 w-2/3">
              {item.subtitle}
            </Text>
            <Text className="text-sm text-yellow-300 mt-2 underline">
              {item.link}
            </Text>
          </ImageBackground>
        )}
      />

      {/* Pagination Dots */}
      <View className="flex-row justify-center mt-2">
        {slides.map((_, index) => (
          <View
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === currentIndex ? "bg-purple-600" : "bg-gray-300"
            }`}
          />
        ))}
      </View>

      {/* Subscription Section */}
      <View className="bg-white m-4 rounded-xl border border-gray-200 shadow p-4">
        <Text className="text-lg font-bold text-gray-900">
          Ethiopia Aviation Entrance Preparation
        </Text>
        <Text className="text-sm text-gray-600 mt-1">
          Your Ultimate Exam Companion!
        </Text>

        {/* Subscription Price */}
        <View className="flex-row items-center bg-green-50 rounded-lg p-2 mt-4">
          <Text className="text-green-700 font-bold text-lg">
            💳 Subscription
          </Text>
          <View className="ml-auto bg-green-500 px-3 py-1 rounded-full">
            <Text className="text-white font-bold">500 birr/year</Text>
          </View>
        </View>

        {/* Features */}
        <View className="mt-4 space-y-3">
          <View>
            <Text className="text-green-600 font-bold">
              Unlock full access to:
            </Text>
            <Text className="mt-1 text-gray-700">
              📚 <Text className="font-bold">Comprehensive Exam Bank</Text> — Access 500+ practice exams covering all key aviation subjects
            </Text>
          </View>

          <View>
            <Text className="text-gray-700">
              🎤 <Text className="font-bold">Extensive Interview Questions</Text> — Prepare with 200+ real-life interview questions commonly asked in the Ethiopian Aviation Academy and airline selection processes
            </Text>
          </View>

          <View>
            <Text className="text-gray-700">
              🖥 <Text className="font-bold">Simulated Test Experience</Text> — Practice with real-time mock exams that simulate the actual test environment
            </Text>
          </View>
        </View>

        {/* Footer Text */}
        <Text className="mt-4 text-gray-800 font-medium">
          Your dream of becoming an aviator starts here! Stay ahead with Ethiopia’s most trusted aviation prep app.
        </Text>

        {/* Payment Button */}
        <TouchableOpacity className="mt-4 bg-purple-600 py-3 rounded-full" onPress={() => router.push("/PaymentInformation")}>
          <Text className="text-center text-white font-bold">
            Go to Payment
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
