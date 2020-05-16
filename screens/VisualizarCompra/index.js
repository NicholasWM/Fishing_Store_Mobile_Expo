import React, {useEffect} from 'react'
import {View, Text} from 'react-native'
const barco_imagem = require('../../assets/images/barco.png')
const grupo_imagem = require('../../assets/images/grupo.png')
import ValoresCaixa from '../../components/ValoresCaixa'
import {useSelector, useDispatch} from 'react-redux'
import {fetchLivroCaixaDadosCompraSelecionada} from '../../store/fetchActions'
const {testeStyle} = require('../../helpers/Style')
export default function VisualizarCompra({route, navigation}){
	const { id, nome, barqueiro, produtos, preco_total } = route.params
	const dadosLivroCaixa = useSelector(({livro_caixa}) => livro_caixa.compra_selecionada)
	const dispatch = useDispatch()

	useEffect(()=> {
		dispatch(fetchLivroCaixaDadosCompraSelecionada(id))
	},[])
	return (
		<View style={{height:'100%', ...testeStyle}}>
			{/* <Text>{JSON.stringify(route.params)}</Text>
			<Text>{JSON.stringify(dadosLivroCaixa)}</Text> */}
			<View style={{height:"100%", ...testeStyle}}>
				<ValoresCaixa
					// style={testeStyle}
					credito={dadosLivroCaixa.credito != undefined ? dadosLivroCaixa.credito.reduce((acc, curr)=> acc + curr.valor, 0): "loading"}
					debito={dadosLivroCaixa.debito != undefined ? dadosLivroCaixa.debito.reduce((acc, curr)=> acc + curr.valor, 0): "loading"}
					dinheiro={dadosLivroCaixa.dinheiro != undefined ? dadosLivroCaixa.dinheiro.reduce((acc, curr)=> acc + curr.valor, 0): "loading"}
				/>
				<View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', width:"100%"}}>
					<Text style={testeStyle}>Total: {dadosLivroCaixa.total != undefined ? dadosLivroCaixa.total.preco_total: "loading"}</Text>
					<Text style={testeStyle}>Pago: {dadosLivroCaixa.total != undefined ? dadosLivroCaixa.total.pago: "loading"}</Text>
				</View>
			</View>
		</View>
	)
}