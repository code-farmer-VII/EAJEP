import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#8200db',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false,
      }}>
      <Stack.Screen name="PaymentIntroduction" options={{ headerShown: false }} />
      <Stack.Screen name="PaymentInformation" options={{ headerShown: true, title: 'Payment Information' }} />
      <Stack.Screen name="PaymentApproval" options={{ headerShown: true, title: 'Waiting for Approval' }} />
    </Stack>
  );
}
