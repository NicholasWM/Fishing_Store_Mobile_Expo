import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, FlatList, ImageBackground, Image} from 'react-native'
const stack = require('../../assets/images/stack.png')
const pagar = require('../../assets/images/pagar.png')
import ValoresCaixa from '../../components/ValoresCaixa'
import {useSelector, useDispatch} from 'react-redux'
import {fetchLivroCaixaDadosCompraSelecionada} from '../../store/fetchActions'
const {testeStyle, textShadow} = require('../../helpers/Style')
const {getImage} = require('../../helpers/Image')
import RegistroEntradaSaida from '../../components/RegistroEntradaSaida'
import DadoFrete from '../../components/DadoFrete'
import BottomMenu from '../../components/BottomMenu'

export default function VisualizarCompra({route, navigation}){
	const { id, nome, barqueiro, produtos, preco_total } = route.params
	const dadosLivroCaixa = useSelector(({livro_caixa}) => livro_caixa.compra_selecionada)
	const dispatch = useDispatch()

	useEffect(()=> {
		dispatch(fetchLivroCaixaDadosCompraSelecionada(id))
	},[])

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
			<FlatList
				data={produtos}
				renderItem={({item})=> item.produtos.length ? item.produtos.map(produto => renderProduto(produto)) : (<Text style={{textAlign:'center'}}>Nenhum Produto</Text>)}
				keyExtractor={(item, index)=> String(index)}
				horizontal={true}
			/>
			<DadoFrete barqueiro={barqueiro} nome={nome}/>
			<FlatList
				style={{height:'25%', borderColor:'black', borderWidth:2}}
				data={dadosLivroCaixa.dinheiro && dadosLivroCaixa.debito && dadosLivroCaixa.credito && dadosLivroCaixa.deposito && [...dadosLivroCaixa.dinheiro, ...dadosLivroCaixa.debito, ...dadosLivroCaixa.credito, ...dadosLivroCaixa.deposito]}
				renderItem={({item})=> <RegistroEntradaSaida item={{...item, modo: item.tipo_transacao, preco: item.valor}} />}
				keyExtractor={(item, index)=> String(index)}
			/>
			<ValoresCaixa
				credito={ dadosLivroCaixa.credito}
				debito={ dadosLivroCaixa.debito}
				dinheiro={ dadosLivroCaixa.dinheiro}
				deposito={ dadosLivroCaixa.deposito}
				total={
					{
						total: dadosLivroCaixa.total ? dadosLivroCaixa.total.preco_total : undefined,
						pago: dadosLivroCaixa.total ? dadosLivroCaixa.total.pago : undefined
					}
				}
			/>
			<BottomMenu
				listButtons={[
					{onPress: ()=>navigation.navigate('Editar Compra',route.params), text: 'Editar', image: stack},
					{onPress: ()=>navigation.navigate('Pagar Compra', {id, barqueiro, nome, dadosLivroCaixa}), text: 'Pagar', image: pagar},
				]}
			/>
		</View>
	)
}