import React, { useRef, useState, useEffect } from 'react';
import { TouchableOpacity,
        KeyboardAvoidingView ,
        Text,
        StatusBar,
} from 'react-native';
import { Form } from '@unform/mobile';
import { ScrollView } from 'react-native-gesture-handler';

import { useDispatch } from 'react-redux'
import {fetchAddProduct} from '../../store/fetchActions'
import {deactivateSearchAction } from '../../store/fetchActions'

import Input from '../../components/Input';
import EditImage from '../../components/EditImage';

import styles from './Styles'

export default function AddNewProduct({ navigation }) {
    const [selectedImage, setSelectedImage] = useState("");
    const dispatch = useDispatch()
    const formRef = useRef(null);
    async function handleSubmit({nome, preco, categoria}) {
        dispatch(fetchAddProduct(nome, preco, categoria, selectedImage))
        formRef.current.clearField('nome');
        formRef.current.clearField('preco');
        formRef.current.clearField('categoria');
        setSelectedImage("")
    }
    useEffect(()=> 
        navigation.addListener('focus', () => {dispatch(deactivateSearchAction())})
    ,[navigation])
    
    return (
        <KeyboardAvoidingView behavior='padding'>
            <ScrollView >
                <StatusBar barStyle="dark-content" />
                <TouchableOpacity
                    style={styles.submitButtonForm}
                    onPress={() => formRef.current.submitForm()}>
                        <Text style={{fontWeight:'bold',textAlign:'center', color:'white', fontSize:20, margin:10}}>Adicionar</Text>
                </TouchableOpacity>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input label="Nome" name="nome"/>
                    <Input label="Categoria" name="categoria"/>
                    <Input label="Preço" name="preco"/>
                </Form>
                <EditImage navigation={navigation} image={selectedImage} setImage={setSelectedImage}/>
            </ScrollView >
        </KeyboardAvoidingView >

    );
}