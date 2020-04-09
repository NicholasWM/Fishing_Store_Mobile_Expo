import React, { useRef, useState, useEffect } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback,KeyboardAvoidingView ,
         Text,
         Image,
         StatusBar,
         View,
         Keyboard} from 'react-native';
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
    useEffect(()=> 
        navigation.addListener('focus', () => {dispatch(deactivateSearchAction())})
    ,[navigation])

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
    <KeyboardAvoidingView behavior='padding'>
    <ScrollView >
        <StatusBar barStyle="dark-content" />
        <TouchableOpacity
            style={styles.submitButtonForm}
            onPress={() => formRef.current.submitForm()}>
                <Text style={{fontWeight:'bold',textAlign:'center', color:'white', fontSize:20, margin:10}}>Adicionar</Text>
        </TouchableOpacity>
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> */}
        <Form ref={formRef} onSubmit={handleSubmit}>
            <Input label="Nome" name="nome"/>
            <Input label="Categoria" name="categoria"/>
            <Input label="Preço" name="preco"/>
        </Form>

        <View style={{flexDirection:'row', justifyContent:'center'}}>
            <Image
                source={selectedImage}
                style={styles.selectedImage}
            />
            <View style={styles.boxSelectionPhotos}>
                <TouchableOpacity style={styles.buttonGaleryPhotos} onPress={openImagePickerAsync}>
                    <Text style={styles.textButtonGaleryPhotos}>Galeria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonGaleryPhotos} onPress={()=>{navigation.navigate('Camera', {setterImage:setSelectedImage})}}>
                    <Text style={styles.textButtonGaleryPhotos}>Tirar Foto</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    </ScrollView >
    </KeyboardAvoidingView >

  );
}
// style={styles.container}