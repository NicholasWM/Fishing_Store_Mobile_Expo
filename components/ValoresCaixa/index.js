import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default function ValoresCaixa({dinheiro, credito, debito}){

	return (
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
	)
}

const styles = StyleSheet.create({
	valoresContainer:{
		flex: 0.3,
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
	}
})