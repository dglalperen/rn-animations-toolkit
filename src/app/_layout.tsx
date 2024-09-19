import CustomHeader from '@/components/header/CustomHeader';
import '../global.css';
import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen
                name="animations/animation_screen_1"
                options={{ title: 'Animation 1' }}
            />
            <Stack.Screen
                name="animations/animation_screen_2"
                options={{ title: 'Animation 2' }}
            />
            <Stack.Screen
                name="animations/animation_screen_3"
                options={{ title: 'Animation 3' }}
            />
        </Stack>
    );
}
