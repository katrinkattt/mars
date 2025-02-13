import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Colors } from '../assets/Colors';
import { CameraObj } from '../typees/types';

interface DropdownSelectProps {
    selected: CameraObj;
    data: CameraObj[];
    setSelected: (camera: CameraObj) => void;
}

const DropdownSelect: React.FC<DropdownSelectProps> = (props) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    return (
        <View>
            <TouchableOpacity
                style={styles.inputSelect}
                onPress={() => setDropdownVisible(!isDropdownVisible)}
            >
                <Text style={styles.dateText}>{props.selected.name || 'Select Camera'}</Text>
            </TouchableOpacity>
            {isDropdownVisible && (
                <View style={styles.dropdown}>
                    <FlatList
                        data={props.data}
                        keyExtractor={(item: CameraObj) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.dropdownItem}
                                onPress={() => {
                                    props.setSelected(item);
                                    setDropdownVisible(false);
                                }}
                            >
                                <Text style={styles.dropdownText}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                        style={styles.flatList}
                        contentContainerStyle={{ paddingBottom: 5 }}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled
                        nestedScrollEnabled
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    inputSelect: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.main.white,
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    dateText: {
        fontSize: 18,
        color: Colors.light.text,
    },
    dropdown: {
        backgroundColor: Colors.main.white,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        elevation: 3,
        shadowColor: Colors.dark.tabIconDefault,
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginTop: -25,
        maxHeight: 150,
    },
    flatList: {
        maxHeight: 150,
    },
    dropdownItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: Colors.dark.tabIconDefault,
    },
    dropdownText: {
        fontSize: 18,
        color: Colors.light.text,
        fontFamily: 'Dosis-Light'
    }
});

export default DropdownSelect;
