import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Colors } from '../assets/Colors';
import moment from 'moment';


interface DatePickerProps {
    date: Date;
    setDate: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ date, setDate }) => {
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false)
    return (
        <TouchableOpacity
            onPress={() => setShowDatePicker(!showDatePicker)}
            style={styles.dateInput}
        >
            {!showDatePicker ?
                (
                    <View style={styles.rowDateInput}>
                        <Text style={styles.dateText}>{moment(date).format('DD MMM YYYY')}</Text>
                        <Image
                            style={{ height: 20, width: 20 }}
                            source={require('../assets/images/calendar.png')}
                        />
                    </View>
                )
                : (<View style={{ backgroundColor: Colors.main.white }}>
                    <DateTimePicker
                        value={date}
                        maximumDate={new Date()}
                        mode="date"
                        display="inline"
                        onChange={(_, selectedDate) => {
                            if (selectedDate) {
                                setDate(selectedDate);
                                setShowDatePicker(false)
                            }
                        }}
                        accentColor={Colors.main.accent}
                        textColor={Colors.light.text}
                        style={{ shadowColor: Colors.light.text, shadowRadius: 0.2, shadowOpacity: 1, shadowOffset: { height: 0.2, width: 0.2 } }}
                    />
                </View>)
            }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    dateInput: {
        alignItems: 'center',
        backgroundColor: Colors.main.white,
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    rowDateInput: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateText: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'Dosis-Regular'
    },
    calendarIcon: {
        fontSize: 18
    }
});

export default DatePicker;
