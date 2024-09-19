// src/screens/WelcomeScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import CustomHeader from '@/components/header/CustomHeader';
import { Colors } from '@/constants/colors';

const WelcomeScreen: React.FC = () => {
    const router = useRouter();

    return (
        <View className="flex-1">
            <CustomHeader
                title={'RN Animations Toolkit'}
                showLogo
            />
            {/* Spacer */}
            <View className="h-10" />
            <View className="flex-1 bg-background items-center gap-4">
                <Button
                    title="Fade In/Out Animation"
                    onPress={() => router.push('/animations/animation_screen_1')}
                    color={Colors.primary}
                />
                <Button
                    title="Scale and Rotate Animation"
                    onPress={() => router.push('/animations/animation_screen_2')}
                    color={Colors.accent}
                />
                <Button
                    title="Translate Animation"
                    onPress={() => router.push('/animations/animation_screen_3')}
                    color={Colors.accent}
                />
            </View>
        </View>
    );
};

export default WelcomeScreen;
