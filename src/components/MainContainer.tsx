import React, { ReactNode } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Colors, ScreenHeight, ScreenWidth } from '../assets/Colors';

type MainContainerProps = {
    children: ReactNode;
};

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => (
    <View style={styles.container}>{children}
        <View style={styles.bottom}>
            <Image
                source={require('../assets/images/curiosity.png')}
                style={styles.roverImage} resizeMode="contain"
            />
        </View>
    </View>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
        padding: 20,
    },
    bottom: {
        position: "absolute",
        bottom: -90,
        left: 0,
        right: 0,
    },
    roverImage: {
        width: ScreenWidth,
        zIndex: 1,
        alignSelf: 'center',
    },
})
