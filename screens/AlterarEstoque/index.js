
import React, { useRef } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import { useDispatch} from 'react-redux'
import { updateEstoque } from '../../store/fetchActions'

import styles from './Style'

import { getImage } from '../../helpers/Image'

import { Form } from '@unform/mobile';
import EditInput from '../../components/EditInput';

export default function AlterarEstoqueScreen({route, navigation}){
    const dispatch = useDispatch()
    const formRef = useRef(null);

    const {id, nome, categoria, preco, imagem} = route.params
    const handleSubmit = ({custo, quantidade})=> {
        dispatch(updateEstoque(({quantidade, custo, produto_id:id, modo:'entrada'})))
        formRef.current.clearField('custo')
        formRef.current.clearField('quantidade')
        navigation.goBack()
    }
    return (
        <View style={styles.form} keyboardType="number-pad">

            <Form ref={formRef} onSubmit={handleSubmit}>
                <EditInput keyboardType="number-pad" label="Quantidade" name="quantidade"/>
                <EditInput keyboardType="number-pad" label="Custo" name="custo"/>
            </Form>

            <TouchableOpacity style={styles.submitInput} onPress={() => formRef.current.submitForm()}>
                {imagem &&(<Image style={{height:70, width:"50%", borderRadius:20}} source={getImage(imagem)}/>)}
                <Text style={{marginRight:'3%', fontSize:25, color:"white", textTransform:'uppercase'}}>Adicionar</Text>
            </TouchableOpacity>
            <Text style={styles.textCategoria}>{categoria}</Text>
            <Text style={styles.textNomeProduto}>{nome}</Text>
            <Text style={styles.textPreco}>{preco} reais</Text>
        </View>
    )
}