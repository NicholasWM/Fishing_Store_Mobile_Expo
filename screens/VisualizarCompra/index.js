import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, FlatList, ImageBackground, Image} from 'react-native'
const barco_imagem = require('../../assets/images/barco.png')
const grupo_imagem = require('../../assets/images/grupo.png')
const stack = require('../../assets/images/stack.png')
const pagar = require('../../assets/images/pagar.png')
import ValoresCaixa from '../../components/ValoresCaixa'
import {useSelector, useDispatch} from 'react-redux'
import {fetchLivroCaixaDadosCompraSelecionada} from '../../store/fetchActions'
const {testeStyle, textShadow} = require('../../helpers/Style')
const {getImage} = require('../../helpers/Image')
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
	const dadoComprador = () => {
		const styles = StyleSheet.create({
			container: {flexDirection:'row', width: '100%', justifyContent:'space-around', alignItems:'center', marginTop:5},
			dados:{flexDirection:'row', alignItems:'center', padding:10, borderColor: 'black', borderWidth:1, borderRadius:25, backgroundColor:'#FFB800'},
			dadoText:{...textShadow, color: '#FFF', fontSize:16}
		})
		return (
			<View style={styles.container}>
				<View style={styles.dados}>
					<Image source={barco_imagem}/>
					<Text style={styles.dadoText}>{barqueiro}</Text>
				</View>
				<View style={styles.dados}>
					<Image source={grupo_imagem}/>
					<Text style={styles.dadoText}>{nome}</Text>
				</View>
			</View>
		)
	}
	const renderProduto = (props) => {
		const {id, nome, imagem, dados} = props
		const preco_total = dados.reduce((pValue, value) => pValue+ value.preco_total, 0)
		const quantidade = dados.reduce((pValue, value) => pValue+ value.quantidade, 0)
		const imagemSelecionada = getImage(imagem)

		const styles = StyleSheet.create({
			container:{width:180, height:130,borderColor: 'black', borderWidth:1, padding:5},
			text: {...textShadow, color:'#fff', textAlign:'center', fontSize:18, marginBottom:2},
			image:{width:'100%', height:120, resizeMode:'cover', borderColor:'black', borderWidth:1, borderRadius:25},
			content:{height:150, marginTop:10}
		})
		return (
			<View key={id} style={styles.container}>
				<ImageBackground style={styles.image} borderRadius={25} source={imagemSelecionada}>
					<View style={styles.content}>
						<Text style={styles.text}>{nome}</Text>
						<Text style={styles.text}>{quantidade} unidades</Text>
						<Text style={styles.text}>{preco_total} reais</Text>
					</View>
				</ImageBackground>
			</View>
		)
	}
	return (
		<View style={{height:'100%', ...testeStyle}}>
			{/* <Text>{JSON.stringify(route.params)}</Text> */}
			{/* <Text>{JSON.stringify([...dadosLivroCaixa.dinheiro, ...dadosLivroCaixa.debito, ...dadosLivroCaixa.credito, ...dadosLivroCaixa.deposito])}</Text> */}
			<FlatList
				data={produtos}
				// renderItem={({item})=> item.produtos.map(produto => (<Text>{JSON.stringify(produto)}</Text>))}
				renderItem={({item})=> item.produtos.length ? item.produtos.map(produto => renderProduto(produto)) : (<Text style={{textAlign:'center'}}>Nenhum Produto</Text>)}
				keyExtractor={(item, index)=> String(index)}
				horizontal={true}
			/>
			{dadoComprador()}
			<FlatList
				style={{height:'25%', borderColor:'black', borderWidth:2}}
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