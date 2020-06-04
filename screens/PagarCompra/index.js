import React, {useRef} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import { Form } from '@unform/mobile';

import { useDispatch } from 'react-redux'

import Input from '../../components/Input';

import DadoFrete from '../../components/DadoFrete'
import ValoresCaixa from '../../components/ValoresCaixa'
import { pagarCompraAction } from '../../store/fetchActions'


export default function PagarCompra({route, navigation}){
	const {id, barqueiro, nome, dadosLivroCaixa} = route.params
	const formRef = useRef(null)
	const dispatch = useDispatch()
	const handleSubmit = ( {debito, credito, dinheiro, deposito}) => {
		dispatch(pagarCompraAction(id, [
			{modo:'debito', valor:debito},
			{modo:'credito', valor: credito},
			{modo:'dinheiro', valor: dinheiro},
			{modo:'deposito', valor: deposito},
		]))
		formRef.current.clearField('debito');
		formRef.current.clearField('credito');
		formRef.current.clearField('dinheiro');
		formRef.current.clearField('deposito');
		navigation.goBack()
	}
	return (
		<View>
			<DadoFrete barqueiro={barqueiro} nome={nome}/>
			<Form ref={formRef} onSubmit={handleSubmit}>
				<Input label="Dinheiro" name="dinheiro" keyboard={'numeric'}/>
				<Input label="Crédito" name="credito" keyboard={'numeric'}/>
				<Input label="Débito" name="debito" keyboard={'numeric'}/>
				<Input label="Deposito" name="deposito" keyboard={'numeric'}/>
			</Form>
			<ValoresCaixa
				credito={dadosLivroCaixa.credito}
				debito={dadosLivroCaixa.debito}
				dinheiro={dadosLivroCaixa.dinheiro}
				total={
					{
						total:dadosLivroCaixa.total.preco_total,
						pago: dadosLivroCaixa.total.pago
					}
				}
			/>
			<TouchableOpacity
				style={{borderColor:'#F92424', borderRadius:25, borderWidth:2, backgroundColor:'#2F2F2F', marginTop:4, width:'80%', alignSelf:'center'}}
				onPress={() => formRef.current.submitForm()}>
					<Text style={{fontWeight:'bold',textAlign:'center', color:'white', fontSize:20, margin:10}}>Pagar</Text>
			</TouchableOpacity>
		</View>
	)
}