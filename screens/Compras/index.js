import React, {useEffect} from 'react'
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native'

import {useDispatch, useSelector} from 'react-redux'
import { fetchComprasData } from '../../store/fetchActions'
import RegistroEntradaSaida2 from '../../components/RegistroEntradaSaida2'
const barco_imagem = require('../../assets/images/barco.png')
const grupo_imagem = require('../../assets/images/grupo.png')
export default function Compras({navigation}){
	const compras = useSelector(({compras})=> compras)
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(fetchComprasData())
	},[dispatch])


	const compraAberta = (compra) => {
		const {barqueiro, nome, preco_total, pago} = compra
		const styles = StyleSheet.create({
			container: {
				borderRadius: 20, borderColor:'black', borderWidth:3,
				width:150,
				flexDirection:'column', alignItems:'center', justifyContent:'space-evenly',
				margin:10,
				backgroundColor:'#736363'
			},
			campo:{flexDirection:'row', alignItems:'center', width:'100%', justifyContent:'center', paddingHorizontal:10},
			textoCampo: {color:'#fff', fontSize: 15, textShadowColor:"black",
			textShadowOffset: {width: 1, height:1}, textShadowRadius:5}
		})

		return (
			<>
				{!pago &&
						<TouchableOpacity onPress={() => navigation.navigate('Visualizar Compra', compra)} style={styles.container}>
							<View style={styles.campo}>
								<Image source={barco_imagem}/>
								<Text style={styles.textoCampo}>{barqueiro}</Text>
							</View>

							<View style={styles.campo}>
								<Image source={grupo_imagem}/>
								<Text style={styles.textoCampo}>{nome}</Text>
							</View>

							<Text style={styles.textoCampo}>Total: {preco_total} reais</Text>
						</TouchableOpacity>

				}
			</>
		)
	}

	const listaVertical = () => (
		<FlatList
			style={{height:'50%'}}
			data={compras}
			renderItem={({item})=>
				<TouchableOpacity onPress={() => navigation.navigate('Visualizar Compra', item)}>
					<RegistroEntradaSaida2
						modo={item.pago? "Fechado" : "Em Aberto"}
						produto_id={item.id}
						preco={item.preco_total}
						label1_box={item.barqueiro}
						label2_box={item.nome}
						data={new Date(item.createdAt)}
					/>
				</TouchableOpacity>
			}
			keyExtractor={(item, index) => `v${item.id}${index}`}
		/>
	)

	const listaHorizontal = () => (
		<>
			<FlatList
				style={{flex:0.1}}
				horizontal={true}
				data={compras}
				renderItem={({item})=> compraAberta(item)}
				keyExtractor={(item, index)=> `h${index}`}
			/>
			<Text style={{textAlign:'center', margin:2, borderTopWidth:1, borderBottomWidth:1, borderColor:'black', padding: 5, fontSize:20}}>Compras Abertas</Text>
		</>
	)
	return (
		<View style={{flex:1}}>
			{listaVertical()}
			{listaHorizontal()}
		</View>
	)
}