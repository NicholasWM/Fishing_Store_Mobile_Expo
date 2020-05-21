import React, {useRef} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import { Form } from '@unform/mobile';

import Input from '../../components/Input';

import DadoFrete from '../../components/DadoFrete'
import ValoresCaixa from '../../components/ValoresCaixa'
import { pagarCompraAction } from '../../store/fetchActions'


export default function PagarCompra({route, navigation}){
	const {id, barqueiro, nome, dadosLivroCaixa} = route.params
	const formRef = useRef(null);
	const handleSubmit = ( debito, credito, dinheiro, deposito) => {
		// dispatch(pagarCompraAction(id, modo, valor))
        // formRef.current.clearField('nome');
        // formRef.current.clearField('preco');
        // formRef.current.clearField('categoria');
		console.log('Submit')
		navigation.goBack()
	}
	return (
		<View>
			<Text>{JSON.stringify(route.params)}</Text>
			<DadoFrete barqueiro={barqueiro} nome={nome}/>
			<Form ref={formRef} onSubmit={handleSubmit}>
				<Input label="Dinheiro" name="dinheiro" keyboard={'numeric'}/>
				<Input label="Crédito" name="credito" keyboard={'numeric'}/>
				<Input label="Débito" name="debito" keyboard={'numeric'}/>
				<Input label="Deposito" name="deposito" keyboard={'numeric'}/>
			</Form>
			<ValoresCaixa
				credito={dadosLivroCaixa.credito != undefined ? dadosLivroCaixa.credito.reduce((acc, curr)=> acc + curr.valor, 0): "loading"}
				debito={dadosLivroCaixa.debito != undefined ? dadosLivroCaixa.debito.reduce((acc, curr)=> acc + curr.valor, 0): "loading"}
				dinheiro={dadosLivroCaixa.dinheiro != undefined ? dadosLivroCaixa.dinheiro.reduce((acc, curr)=> acc + curr.valor, 0): "loading"}
				total={
					{
						total: dadosLivroCaixa.total != undefined ? dadosLivroCaixa.total.preco_total: "loading",
						pago: dadosLivroCaixa.total != undefined ? dadosLivroCaixa.total.pago: "loading"
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