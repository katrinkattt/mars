import React, { memo, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Modal, Alert, Linking } from "react-native";
import axios from 'axios';
import { useNavigation } from "@react-navigation/native"
import Clipboard from '@react-native-clipboard/clipboard';
import { MainContainer } from "../components/MainContainer"
import { CameraObj } from '../typees/types';
import { API_KEY, BASE_URL } from '../api/nasa';
import moment from 'moment';
import Toast from 'react-native-toast-message';
import { Colors, ScreenHeight } from '../assets/Colors';



const FotoGalleryScreen: React.FC<any> = (props) => {
    const data: { date: string, camera: CameraObj } = props.route.params?.data
    const navigation = useNavigation()
    const [loading, setLoading] = useState<boolean>(false)
    const [imagesList, setImagesList] = useState<[] | any>([])
    const [selectedImage, setSelectedImage] = useState<any>({})
    const [modalVisible, setModalVisible] = useState<boolean>(false)


    useEffect(() => {
        if (data?.camera?.id && data?.date) {
            fetchMarsPhotos()
        }
    }, [, data?.date])

    const fetchMarsPhotos = () => {
        axios.get(BASE_URL + '/curiosity/photos', {
            params: {
                sol: 1000,
                camera: data.camera.id,
                earth_date: data.date,
                api_key: API_KEY,
            }
        })
            .then(res => {
                if (!!res.data?.photo) {
                    setImagesList(res.data?.photos)
                    setLoading(false)
                    console.log('fetchMarsPhotos res.data?.photos', res.data?.photos);
                } else {
                    Toast.show({
                        type: 'hugeToast',
                        text2: 'No photos found on selected day',
                        props: { color: "#FC0314" }
                    })
                }


            }).catch(err => {
                console.log('fetchMarsPhotos err', err);

                setLoading(false)
                Toast.show({
                    type: 'hugeToast',
                    text2: err?.response?.data?.error?.message,
                    props: { color: "#FC0314" }
                })
            })
    }


    return (
        <MainContainer>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ width: 30 }} onPress={() => navigation.goBack()}>
                    <Text style={styles.textIcon}>{`<`}</Text>
                </TouchableOpacity>
                <View style={[styles.header, { right: 30, }]}>
                    <Text style={{
                        fontSize: 18, fontFamily: 'Dosis-Medium'
                    }}>{data.camera.name ?? null}</Text>
                    <Text style={{
                        fontSize: 16, fontFamily: 'Dosis'
                    }}>{moment(data.date).format('DD MMM YYYY') ?? null}</Text>
                </View>
            </View>
            <View style={styles.content}>
                {loading ? <Text>Loading...</Text> :
                    (
                        <ScrollView contentContainerStyle={styles.galleryContainer}>
                            {imagesList.lenght ?? imagesList.map((image: any) => (
                                <TouchableOpacity key={image.id} onPress={() => {
                                    setSelectedImage(image)
                                    setModalVisible(true)
                                }}>
                                    <Image
                                        source={{ uri: image?.img_src.replace(/^http:/, 'https:') }}
                                        style={styles.image}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>

                            ))}
                        </ScrollView>
                    )}
            </View>
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>

                    <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                        <Text style={[styles.textIcon, styles.closeText]}>{`<`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareButton} onPress={() => {
                        selectedImage?.img_src && Linking.openURL(selectedImage?.img_src)
                        // Clipboard.setString(selectedImage?.img_src)
                        //two options, but opening the link looks more logical
                    }}>
                        <Image
                            source={require('../assets/images/share.png')}
                            style={styles.shareImage}
                        />
                    </TouchableOpacity>
                    <View style={styles.header}>
                        <Text style={{
                            fontSize: 18, color: Colors.main.white, fontFamily: 'Dosis-Medium'
                        }}>Photo ID</Text>
                        <Text style={{
                            fontSize: 22, fontFamily: 'Dosis-Bold', color: Colors.main.white
                        }}>{selectedImage?.id ?? null}</Text>
                    </View>
                    {selectedImage?.img_src && (
                        <Image
                            source={{ uri: selectedImage?.img_src.replace(/^http:/, 'https:') }}
                            style={styles.modalImage}
                        />
                    )}
                </View>
            </Modal>

        </MainContainer>)
}
export default memo(FotoGalleryScreen)



const styles = StyleSheet.create({
    header: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textIcon: {
        fontFamily: 'Dosis-Medium',
        fontSize: 26
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    galleryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    image: {
        width: 109,
        height: 109,
        borderRadius: 8,
        marginBottom: 10,
        zIndex: 10,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'hsla(0, 0.00%, 0.00%, 0.91)',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 60
    },
    modalImage: {
        marginTop: 30,
        width: '95%',
        height: ScreenHeight * 0.7,
        borderRadius: 8
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        padding: 10,
    },
    closeText: {
        fontSize: 30,
        color: Colors.main.white,
    },
    shareButton: {
        position: 'absolute',
        top: 48,
        right: 20,
        padding: 10,
    },
    shareImage: {
        height: 26,
        width: 26,
    }

})
