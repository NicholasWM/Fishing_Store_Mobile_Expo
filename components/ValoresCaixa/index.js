import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
const {textShadow, testeStyle} = require('../../helpers/Style')

export default function ValoresCaixa({dinheiro, credito, debito, deposito, total=undefined}){
	/*
		Refactoring:
			Exibir Deposito
			Isolar a lógica para diminuir a informação no input
			Exibir apenas valores maiores que 0
			Caso nao exista nenhum valor exibir mensagem padrao

	*/
	const somaValores = (lista) => lista.reduce((acc, curr)=> acc + Number(curr.valor), 0)
	return (
		<>
			<View style={styles.valoresContainer}>
				{dinheiro && dinheiro.length || credito && credito.length || debito && debito.length || deposito && deposito.length ?
					<>
						{dinheiro && dinheiro.length > 0 &&
							<View style={styles.valor}>
								<Text style={styles.valorText}>Dinheiro:</Text>
								<Text style={styles.valorText}>{dinheiro != undefined ? `${somaValores(dinheiro)} reais`: "loading"}</Text>
							</View>
						}
						{credito && credito.length > 0 &&
							<View style={styles.valor}>
								<Text style={styles.valorText}>Crédito:</Text>
								<Text style={styles.valorText}>{credito != undefined ? `${somaValores(credito)} reais`: "loading"}</Text>
							</View>
						}
						{debito && debito.length > 0 &&
							<View style={styles.valor}>
								<Text style={styles.valorText}>Débito:</Text>
								<Text style={styles.valorText}>{debito != undefined ? `${somaValores(debito)} reais`: "loading"}</Text>
							</View>
						}
						{deposito && deposito.length > 0 &&
							<View style={styles.valor}>
								<Text style={styles.valorText}>Deposito:</Text>
								<Text style={styles.valorText}>{deposito != undefined ? `${somaValores(deposito)} reais`: "loading"}</Text>
							</View>
						}
					</>
					:
					<View style={styles.valor}>
						<Text styles={styles.msgPadraoNenhumValor}>Nenhum Valor inserido!</Text>
					</View>
				}
			</View>
			{total && (
				<View style={styles.containerResumo}>
					<View style={styles.itemContainer}>
						<Text style={styles.containerResumoText}>Total: {total.total != undefined ? total.total: "loading"}</Text>
					</View>
					<View style={styles.itemContainer}>
						<Text style={styles.containerResumoText}>Pago: {total.pago != undefined ? total.pago: "loading"}</Text>
					</View>
				</View>
			)}
		</>
	)
}

const styles = StyleSheet.create({
	valoresContainer:{
		justifyContent:'space-around',
		borderBottomWidth: 3,
		borderColor: 'black'
	},
	valor: {
		flexDirection: 'row',
		borderTopWidth: 3,
		borderColor: 'black',
	},
	valorText:{
		height:50,
		fontSize: 18,
		fontWeight:'bold',
		textAlign:'center',
		textAlignVertical:'center',
		width: "50%"
	},
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
	},
	msgPadraoNenhumValor:{
		...testeStyle, fontSize:30
	}
})