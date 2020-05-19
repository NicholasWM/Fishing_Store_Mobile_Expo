import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
const barco_imagem = require('../../assets/images/barco.png')
const grupo_imagem = require('../../assets/images/grupo.png')
const stack = require('../../assets/images/stack.png')
const pagar = require('../../assets/images/pagar.png')
import ValoresCaixa from '../../components/ValoresCaixa'
import {useSelector, useDispatch} from 'react-redux'
import {fetchLivroCaixaDadosCompraSelecionada} from '../../store/fetchActions'
const {testeStyle, textShadow} = require('../../helpers/Style')
import RegistroEntradaSaida from '../../components/RegistroEntradaSaida'
import BottomMenu from '../../components/BottomMenu'

export default function VisualizarCompra({route, navigation}){
	const [dadosPagamento, setDadosPagamento] = useState([])
	const { id, nome, barqueiro, produtos, preco_total } = route.params
	const dadosLivroCaixa = useSelector(({livro_caixa}) => livro_caixa.compra_selecionada)
	const dispatch = useDispatch()

	useEffect(()=> {
		dispatch(fetchLivroCaixaDadosCompraSelecionada(id))
	},[])
	useEffect(()=> {
		if(dadosLivroCaixa.dinheiro && dadosLivroCaixa.debito && dadosLivroCaixa.credito && dadosLivroCaixa.deposito){
			setDadosPagamento([...dadosLivroCaixa.dinheiro, ...dadosLivroCaixa.debito, ...dadosLivroCaixa.credito, ...dadosLivroCaixa.deposito])
		}
	},[dadosLivroCaixa])
	const Caixa = () => {
		const styles = StyleSheet.create({
			container:{...testeStyle},
			itemContainer: {
				flexDirection:'row', alignItems:'center', justifyContent:'space-around',
				backgroundColor:"#D60800", padding:20,
				borderColor:'black', borderWidth:2,
				width:"50%", marginTop:1
			},
			containerResumoText: {
				color:'#FFF', fontSize: 20,...textShadow
			},
			containerResumo: {
				width:"100%",
				flexDirection:'row'
			}
		})
		return (
			<View style={styles.container}>
				<ValoresCaixa
					credito={dadosLivroCaixa.credito != undefined ? dadosLivroCaixa.credito.reduce((acc, curr)=> acc + curr.valor, 0): "loading"}
					debito={dadosLivroCaixa.debito != undefined ? dadosLivroCaixa.debito.reduce((acc, curr)=> acc + curr.valor, 0): "loading"}
					dinheiro={dadosLivroCaixa.dinheiro != undefined ? dadosLivroCaixa.dinheiro.reduce((acc, curr)=> acc + curr.valor, 0): "loading"}
				/>

				<View style={styles.containerResumo}>
					<View style={styles.itemContainer}>
						<Text style={styles.containerResumoText}>Total: {dadosLivroCaixa.total != undefined ? dadosLivroCaixa.total.preco_total: "loading"}</Text>
					</View>
					<View style={styles.itemContainer}>
						<Text style={styles.containerResumoText}>Pago: {dadosLivroCaixa.total != undefined ? dadosLivroCaixa.total.pago: "loading"}</Text>
					</View>
				</View>
			</View>
		)
	}
	return (
		<View style={{height:'100%', ...testeStyle}}>
			{/* <Text>{JSON.stringify(route.params)}</Text> */}
			{/* <Text>{JSON.stringify([...dadosLivroCaixa.dinheiro, ...dadosLivroCaixa.debito, ...dadosLivroCaixa.credito, ...dadosLivroCaixa.deposito])}</Text> */}
			<FlatList
				data={dadosPagamento}
				renderItem={({item})=> <RegistroEntradaSaida item={{...item, modo: item.tipo_transacao, preco: item.valor}} />}
				keyExtractor={(item, index)=> String(index)}
			/>
			{Caixa()}
			<BottomMenu
				listButtons={[
					{onPress: ()=>navigation.navigate('Editar Compra',route.params), text: 'Editar', image: stack},
					{onPress: ()=>navigation.navigate('Pagar Compra',route.params), text: 'Pagar', image: pagar},
				]}
			/>
		</View>
	)
}