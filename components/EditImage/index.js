import React, { useRef, useState, useEffect } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback,KeyboardAvoidingView ,
         Text,
         Image,
         StatusBar,
         View,
         Keyboard} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import { useDispatch } from 'react-redux'
import {fetchAddProduct} from '../../store/fetchActions'
import styles from './Styles'
const imagemPadrao = require('../../assets/images/white-image.png')
export default function EditImage({route, navigation, image, setImage}) {
    const [selectedImage, setSelectedImage] = useState(imagemPadrao);
    const dispatch = useDispatch()
    async function handleSubmit({nome, preco, categoria}) {
        dispatch(fetchAddProduct(nome, preco, categoria, selectedImage))
    }


    let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
        return;
    }
    setImage(pickerResult);
}
  
  return (
    <View >
        <StatusBar barStyle="dark-content" />

        <View style={{flexDirection:'row', justifyContent:'center'}}>
            <Image
                source={image ? image : imagemPadrao}
                style={styles.selectedImage}
            />
            <View style={styles.boxSelectionPhotos}>
                <TouchableOpacity style={styles.buttonGaleryPhotos} onPress={openImagePickerAsync}>
                    <Text style={styles.textButtonGaleryPhotos}>Galeria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonGaleryPhotos} onPress={()=>{navigation.navigate('Camera', {setterImage:setImage})}}>
                    <Text style={styles.textButtonGaleryPhotos}>Tirar Foto</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    </View >

  );
}
// style={styles.container}