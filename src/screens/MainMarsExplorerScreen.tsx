import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Colors, ScreenHeight, ScreenWidth } from '../asset/Colors';

export default function MainMarsExplorer() {
    const [selectedCamera, setSelectedCamera] = useState('Front Hazard Avoidance Camera');
    const [date, setDate] = useState(new Date(2021, 9, 18));
    const [showDatePicker, setShowDatePicker] = useState(false);
    const pickerRef = useRef();

    const handleDateChange = (event: any, selectedDate: Date | any) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios');
        setDate(currentDate);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select Camera and Date</Text>
            <View style={{ zIndex: 5, height: ScreenHeight * 0.7, justifyContent: 'center' }}>

                <TouchableOpacity style={styles.exploreButton}>
                    <Text style={styles.exploreButtonText}>Explore</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                position: "absolute",
                bottom: -90,
                left: 0,
                right: 0,
            }}>
                <Image source={require('./../asset/images/curiosity.png')} style={styles.roverImage} resizeMode="contain" />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
        color: '#000',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#000',
    },
    pickerContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    picker: {
        height: 50,
        color: '#000',
    },
    dateInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    dateText: {
        fontSize: 16,
        color: '#000',
    },
    calendarIcon: {
        fontSize: 20,
        color: '#000',
    },
    exploreButton: {
        backgroundColor: Colors.light.icon,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 40,
    },
    exploreButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    roverImage: {
        width: ScreenWidth,
        // height: 200,
        zIndex: 1,
        alignSelf: 'center',
    },
});
