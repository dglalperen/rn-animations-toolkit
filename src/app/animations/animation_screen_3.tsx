import CustomHeader from '@/components/header/CustomHeader';
import { Colors } from '@/constants/colors';
import React from 'react';
import { View, Text, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const TranslateXYZ: React.FC = () => {
    // Shared values for X, Y, and Z translation
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const scaleZ = useSharedValue(1); // Z-axis simulated by scaling

    // Animated styles for translation
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: translateX.value }, // X-axis
            { translateY: translateY.value }, // Y-axis
            { scale: scaleZ.value }, // Z-axis (simulated with scale)
        ],
    }));

    return (
        <View className="flex-1">
            <CustomHeader title="Translate X, Y, Z" />
            <View className="flex-1 justify-center items-center">
                <Animated.View
                    style={[
                        {
                            width: 100,
                            height: 100,
                            backgroundColor: Colors.accent,
                            borderRadius: 10,
                        },
                        animatedStyle,
                    ]}
                />
            </View>

            {/* Sliders to control translation on X, Y, and Z axes */}
            <View className="px-6 pb-8">
                <Text className="text-primary font-bold mb-2">Translate X (Horizontal)</Text>
                <Slider
                    minimumValue={-150}
                    maximumValue={150}
                    onValueChange={value =>
                        (translateX.value = withTiming(value, { duration: 300 }))
                    }
                    value={translateX.value}
                    minimumTrackTintColor={Colors.primary}
                />

                <Text className="text-primary font-bold mb-2 mt-4">Translate Y (Vertical)</Text>
                <Slider
                    minimumValue={-150}
                    maximumValue={150}
                    onValueChange={value =>
                        (translateY.value = withTiming(value, { duration: 300 }))
                    }
                    value={translateY.value}
                    minimumTrackTintColor={Colors.secondary}
                />

                <Text className="text-primary font-bold mb-2 mt-4">
                    Translate Z (Depth - Simulated)
                </Text>
                <Slider
                    minimumValue={0.5}
                    maximumValue={2}
                    onValueChange={value => (scaleZ.value = withTiming(value, { duration: 300 }))}
                    value={scaleZ.value}
                    minimumTrackTintColor={Colors.accent}
                />

                {/* Reset Button */}
                <View className="mt-8">
                    <Button
                        title="Reset"
                        onPress={() => {
                            translateX.value = withTiming(0, { duration: 300 });
                            translateY.value = withTiming(0, { duration: 300 });
                            scaleZ.value = withTiming(1, { duration: 300 });
                        }}
                        color={Colors.primary}
                    />
                </View>
            </View>
        </View>
    );
};

export default TranslateXYZ;
