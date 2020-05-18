import React, {useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
const barco_imagem = require('../../assets/images/barco.png')
const grupo_imagem = require('../../assets/images/grupo.png')
import ValoresCaixa from '../../components/ValoresCaixa'
import {useSelector, useDispatch} from 'react-redux'
import {fetchLivroCaixaDadosCompraSelecionada} from '../../store/fetchActions'
const {testeStyle, textShadow} = require('../../helpers/Style')
export default function VisualizarCompra({route, navigation}){
	const { id, nome, barqueiro, produtos, preco_total } = route.params
	const dadosLivroCaixa = useSelector(({livro_caixa}) => livro_caixa.compra_selecionada)
	const dispatch = useDispatch()

	useEffect(()=> {
		dispatch(fetchLivroCaixaDadosCompraSelecionada(id))
	},[])

	const Caixa = () => {
		const styles = StyleSheet.create({
			container:{height:"100%", ...testeStyle},
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
			{/* <Text>{JSON.stringify(route.params)}</Text>
			<Text>{JSON.stringify(dadosLivroCaixa)}</Text> */}
			{Caixa()}
		</View>
	)
}