import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
const {textShadow} = require('../../helpers/Style')

export default function ValoresCaixa({dinheiro, credito, debito, total=undefined}){

	return (
		<>
			<View style={styles.valoresContainer}>
				<View style={styles.valor}>
					<Text style={styles.valorText}>Dinheiro:</Text>
					<Text style={styles.valorText}>{dinheiro} reais</Text>
				</View>
				<View style={styles.valor}>
					<Text style={styles.valorText}>Crédito:</Text>
					<Text style={styles.valorText}>{credito} reais</Text>
				</View>
				<View style={styles.valor}>
					<Text style={styles.valorText}>Débito:</Text>
					<Text style={styles.valorText}>{debito} reais</Text>
				</View>
			</View>
			{total && (
				<View style={styles.containerResumo}>
					<View style={styles.itemContainer}>
						<Text style={styles.containerResumoText}>Total: {total.total}</Text>
					</View>
					<View style={styles.itemContainer}>
						<Text style={styles.containerResumoText}>Pago: {total.pago}</Text>
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
	}
})