import React, { useEffect, useRef } from "react";
import { View, Image, Animated } from "react-native";
import icon from "../assets/ethiopian_airlines-logo-brandlogo.net_-512x512.png";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

export default function Index() {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push('/splashScreen1')
    }, 3000);

    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    return () => clearTimeout(timeoutId); 
  }, [fadeAnimation, navigation]);    

  return (
    <View className="flex-1 justify-center items-center">
      <Animated.View className={` w-100 h-100  overflow-hidden opacity-${fadeAnimation}`}>
        {/* <Image className="w-80 h-80" source={{ uri: 'https://brandlogos.net/wp-content/uploads/2022/01/ethiopian_airlines-logo-brandlogo.net_-512x512.png' }}  /> */}
        <Image className="w-80 h-80" source={icon}  />
      </Animated.View>
      <Animated.Text className="text-3xl font-bold text-center text-green-700">Welcome to</Animated.Text>
      <Animated.Text className="text-3xl font-bold text-center text-yellow-500">Ethiopian Avation University</Animated.Text>
      <Animated.Text className="text-3xl font-bold text-center text-red-700">Entrance Exam Preparation </Animated.Text>

    </View>
  );
}

