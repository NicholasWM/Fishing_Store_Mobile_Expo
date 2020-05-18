
import React, { useState ,useEffect, useRef } from 'react';
import {
    Text, Image, TouchableOpacity
} from 'react-native';

import { useDispatch } from 'react-redux'
import { fetchAddStock } from '../../store/fetchActions'

import { Form } from '@unform/mobile';
import EditInput from '../../components/EditInput';
import EditImage from '../../components/EditImage';

import { getImage } from '../../helpers/Image/index'

import styles from './Style'

export default function AlterarEstoqueScreen({route, navigation}){
    const dispatch = useDispatch()
    const [selectedImage, setSelectedImage] = useState(null);
    const {imagem, categoria, nome, preco} = route.params
    const imagemAtual = getImage(imagem)
    useEffect(()=>{
        setSelectedImage(imagemAtual)
    },[])
    const formRef = useRef(null);

    const handleSubmit = ()=> console.log("Não Implementado")
    return (
        <>
            <EditImage navigation={navigation} image={selectedImage} setImage={setSelectedImage}/>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <EditInput label={nome} name="nome"/>
                <EditInput reverseStyle={true} label={`${preco} reais`} name="preco"/>
                <EditInput label={categoria} name="categoria"/>
            </Form>
            <TouchableOpacity style={styles.box}>
                <Text style={styles.boxText}>Alterar</Text>
                <Image
                    style={styles.boxContent}
                    source={selectedImage}/>
            </TouchableOpacity>
        </>
    )
}