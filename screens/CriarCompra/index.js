import React, {useEffect, useRef} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import { Form } from '@unform/mobile';
import {deactivateSearchAction } from '../../store/fetchActions'
import Input from '../../components/Input';
import { useDispatch } from 'react-redux'

export default function CriarCompra({navigation}){
    const formRef = useRef(null);
    const dispatch = useDispatch()

	useEffect(()=>
        navigation.addListener('focus', () => {dispatch(deactivateSearchAction())})
	,[navigation])

    async function handleSubmit({nome, preco, categoria}) {
        // dispatch(fetchAddProduct(nome, preco, categoria, selectedImage))
        // formRef.current.clearField('barqueiro');
        // formRef.current.clearField('turma');
        // formRef.current.clearField('produto');
        // formRef.current.clearField('quantidade');
        // setSelectedImage("")
    }

	return (
		<View style={{flex: 1}}>
			<View style={{flex: 0.7, justifyContent:'space-around'}}>
				<Form ref={formRef} onSubmit={handleSubmit}>
					<Input label="Barqueiro" name="barqueiro"/>
					<Input label="Turma" name="turma"/>
					<Input label="Produto" name="produto"/>
					<Input label="Quantidade" name="quantidade"/>
				</Form>
				<TouchableOpacity
					style={{borderColor:'black', borderWidth:2, backgroundColor: 'yellow'}}
					onPress={() => formRef.current.submitForm()}>
						<Text style={{fontWeight:'bold',textAlign:'center', color:'black', fontSize:20, margin:10}}>Adicionar</Text>
				</TouchableOpacity>
			</View>
			<View style={{flex: 0.3, borderWidth:1}}>

			</View>
		</View>
	)
}