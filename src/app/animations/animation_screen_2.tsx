import CustomHeader from '@/components/header/CustomHeader';
import { Colors } from '@/constants/colors';
import React from 'react';
import { View, Button } from 'react-native';
import Animated, {
    useSharedValue,
    withSpring,
    withTiming,
    useAnimatedStyle,
} from 'react-native-reanimated';

const ScaleAndRotate: React.FC = () => {
    const scale = useSharedValue(1);
    const rotation = useSharedValue(0);
    const translateX = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: withSpring(scale.value) }, { rotate: `${rotation.value}deg` }],
    }));

    return (
        <View className="flex-1">
            <CustomHeader title="Scale and Smooth Rotate Animation" />
            <View className="flex-1 justify-center items-center">
                <Animated.View
                    className="mb-10"
                    style={[
                        { width: 100, height: 100, backgroundColor: Colors.primary },
                        animatedStyle,
                    ]}
                />
                <Button
                    title="Animate"
                    onPress={() => {
                        // Scale animation with spring effect
                        scale.value = scale.value === 1 ? 1.25 : 1;

                        // Rotate animation with timing for smooth effect
                        rotation.value = withTiming(rotation.value === 0 ? 180 : 0, {
                            duration: 500, // Adjust duration for smoothness
                        });
                    }}
                />
            </View>
        </View>
    );
};

export default ScaleAndRotate;
