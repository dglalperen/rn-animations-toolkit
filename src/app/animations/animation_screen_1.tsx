import CustomHeader from '@/components/header/CustomHeader';
import { Colors } from '@/constants/colors';
import React from 'react';
import { View, Button } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

const FadeInOut: React.FC = () => {
    const opacity = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: withTiming(opacity.value, { duration: 500 }),
    }));

    return (
        <View className="flex-1">
            <CustomHeader title="Heres a simple Fade Animation" />
            <View className="flex-1 justify-center items-center">
                <Animated.View
                    className="mb-6"
                    style={[
                        { width: 100, height: 100, backgroundColor: Colors.accent },
                        animatedStyle,
                    ]}
                />
                <Button
                    title="Toggle Fade"
                    onPress={() => {
                        opacity.value = opacity.value === 0 ? 1 : 0;
                    }}
                />
            </View>
        </View>
    );
};

export default FadeInOut;
