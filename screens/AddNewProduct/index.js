import React, { useRef, useState } from 'react';
import { TouchableOpacity, Text, Image, StatusBar, } from 'react-native';
import { Form } from '@unform/mobile';
import Input from '../../components/Input';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';

import { useDispatch } from 'react-redux'
import {fetchAddProduct} from '../../store/fetchActions'

export default function SignIn() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [displayImage, setDisplayImage] = useState("");
    const dispatch = useDispatch()
    const formRef = useRef(null);
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
    setSelectedImage(pickerResult);
    setDisplayImage(pickerResult.uri);
}
  
  return (
      <ScrollView style={{alignContent:'center', borderColor:'red', borderWidth:3}}>
        <StatusBar barStyle="dark-content" />
        {displayImage != "" ?(
            <Image
                source={{ uri: displayImage}}
                style={{width: 300,
                        height: 300,
                        resizeMode: "contain"}}
            />

        ):(
            <Image
                source={require('../../assets/images/white-image.png')}
                style={{width: 300,
                        height: 300,
                        resizeMode: "contain"}}
            />
        ) }
        <TouchableOpacity onPress={openImagePickerAsync}>
            <Text>Escolher Imagem da Galeria</Text>
        </TouchableOpacity>
        <Form ref={formRef} onSubmit={handleSubmit}>
            <Input label="Nome" name="nome"/>
            <Input label="Categoria" name="categoria"/>
            <Input label="Preço" name="preco"/>
            <TouchableOpacity
                style={{
                    backgroundColor: '#111',
                    border: 0,
                    borderRadius: 4,
                    padding: 16,
                    alignItems: 'center'
                }}
                onPress={() => formRef.current.submitForm()}>
                    <Text style={{fontWeight:'bold',textAlign:'center', color:'white', fontSize:20, margin:10}}>Adicionar</Text>
            </TouchableOpacity>
        </Form>
      </ScrollView>
  );
}