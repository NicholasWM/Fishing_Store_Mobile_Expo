import React, { useRef, useState, useEffect } from 'react';
import { TouchableOpacity,
         Text,
         Image,
         StatusBar,
         View} from 'react-native';
import { Form } from '@unform/mobile';
import Input from '../../components/Input';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';

import { useDispatch } from 'react-redux'
import {fetchAddProduct} from '../../store/fetchActions'
import {deactivateSearchAction } from '../../store/fetchActions'

import styles from './Styles'
export default function SignIn({route, navigation}) {
    const [selectedImage, setSelectedImage] = useState(require('../../assets/images/white-image.png'));
    const dispatch = useDispatch()
    const formRef = useRef(null);
    async function handleSubmit({nome, preco, categoria}) {
        dispatch(fetchAddProduct(nome, preco, categoria, selectedImage))
    }
    useEffect(()=> {
        return navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action
            dispatch(deactivateSearchAction())
          });
      },[navigation])

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
    setSelectedImage(pickerResult);
}
  
  return (
    <>
        <ScrollView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Image
                source={selectedImage}
                style={styles.selectedImage}
            />
            <View style={styles.boxSelectionPhotos}>
                <TouchableOpacity style={styles.buttonGaleryPhotos} onPress={openImagePickerAsync}>
                    <Text style={styles.textButtonGaleryPhotos}>Escolher Imagem da Galeria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonGaleryPhotos} onPress={()=>{navigation.navigate('Camera', {setterImage:setSelectedImage})}}>
                    <Text style={styles.textButtonGaleryPhotos}>Tirar Foto</Text>
                </TouchableOpacity>
            </View>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Input label="Nome" name="nome"/>
                <Input label="Categoria" name="categoria"/>
                <Input label="Preço" name="preco"/>
            </Form>
        </ScrollView>
        <TouchableOpacity
            style={styles.submitButtonForm}
            onPress={() => formRef.current.submitForm()}>
                <Text style={{fontWeight:'bold',textAlign:'center', color:'white', fontSize:20, margin:10}}>Adicionar</Text>
        </TouchableOpacity>
    </>
  );
}