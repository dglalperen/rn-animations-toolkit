import { Colors } from '@/constants/colors';
import React from 'react';
import { View, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; // Import the vector icon library
import { useRouter } from 'expo-router';

interface CustomHeaderProps {
    showLogo?: boolean;
    title?: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ showLogo = false, title }) => {
    const screenWidth = Dimensions.get('screen').width;
    const screenHeight = Dimensions.get('screen').height;
    const router = useRouter(); // Router for navigating back

    return (
        <SafeAreaView>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 15,
                    height: screenHeight * 0.1,
                    width: screenWidth,
                    backgroundColor: Colors.background,
                }}>
                {showLogo ? (
                    <Image
                        source={require('../../assets/logo.png')}
                        style={{ width: 60, height: 60, marginRight: 20 }}
                        resizeMode="contain"
                        borderRadius={20}
                    />
                ) : (
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons
                            name="arrow-back"
                            size={30}
                            color={Colors.primary}
                        />
                    </TouchableOpacity>
                )}

                <Text className="text-lg color-primary font-bold">{title}</Text>

                {/* Empty View to balance the layout */}
                <View style={{ width: 20 }} />
            </View>
            <View className="bg-primary h-1" />
        </SafeAreaView>
    );
};

export default CustomHeader;
