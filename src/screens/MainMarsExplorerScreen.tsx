import React, { useState, memo, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { CameraObj } from '../typees/types';
import { Colors, ScreenHeight } from '../assets/Colors'
import { MainContainer } from '../components/MainContainer';
import DropdownSelect from '../components/DropdownSelect';
import DatePicker from '../components/DatePiker';
import { APP_CONTEXT, AppContext } from '../context';
import moment from 'moment';

const CameraArray: CameraObj[] = [
    { id: 'FHAZ', name: 'Front Hazard Avoidance Camera' },
    { id: 'RHAZ', name: 'Rear Hazard Avoidance Camera' },
    { id: 'MAST', name: 'Mast Camera' },
    { id: 'CHEMCAM', name: 'Chemistry and Camera Complex' },
    { id: 'MAHLI', name: 'Mars Hand Lens Imager' },
    { id: 'MARDI', name: 'Mars Descent Imager' },
    { id: 'NAVCAM', name: 'Navigation Camera' },
    { id: 'PANCAM', name: 'Panoramic Camera' },
    { id: 'MINITES', name: 'Miniature Thermal Emission Spectrometer' }
]

const MainMarsExplorer: React.FC = () => {
    const [selectedCamera, setSelectedCamera] = useState<CameraObj>(CameraArray[0])
    const [date, setDate] = useState<Date | any>(new Date())
    const navigation = useNavigation()

    return (
        <MainContainer>
            <Text style={styles.title}>Select Camera and Date</Text>
            <View style={{ zIndex: 5, height: ScreenHeight * 0.7, justifyContent: 'center' }}>
                <Text style={styles.label}>Rover Camera</Text>
                <DropdownSelect
                    selected={selectedCamera}
                    data={CameraArray}
                    setSelected={(select) => setSelectedCamera(select)}
                />
                <Text style={styles.label}>Date</Text>
                <DatePicker date={date} setDate={(date) => setDate(date)} />

                <TouchableOpacity
                    //@ts-ignore
                    onPress={() => navigation.navigate('FotoGalleryScreen',
                        {
                            data: {
                                date: moment(date).format('YYYY-MM-DD'),
                                camera: selectedCamera
                            }
                        })
                    }
                    style={styles.exploreButton}
                >
                    <Text style={styles.exploreButtonText}>Explore</Text>
                </TouchableOpacity>
            </View>
        </MainContainer >
    );
}
export default memo(MainMarsExplorer)

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 40,
        color: '#000',
        fontFamily: 'Dosis-Medium'
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#000',
        fontFamily: 'Dosis-Light'
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
        fontFamily: 'Dosis-SemiBold'
    },
});
