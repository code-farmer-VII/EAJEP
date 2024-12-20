import Hero from '@/components/hero';
import { Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
export default function Home() {


  return (
    <View className='bg-red-800 flex flex-1 items-center justify-center'>
      <View className='flex flex-col'>
      <Text className='text-center text-2xl text-white'>This is the greate page</Text>
      <TouchableOpacity onPress={() => router.push('/(tabs)/About')}>About</TouchableOpacity>
      <Hero />
      </View>
    </View>
  );
}
