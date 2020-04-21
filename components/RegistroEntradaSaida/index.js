import React from 'react'
import {View, Text} from 'react-native'
import styles from './Style'
import {date} from '../../helpers/Date'


export default function RegistroEntradaSaida({item}){
	return (
		<View style={item.modo == 'entrada' ? {...styles.registerContainer , flexDirection:'row-reverse', borderColor:'green'}:styles.registerContainer}>
			<View style={item.modo == 'entrada' ? {...styles.registerBox1, borderLeftWidth:2, borderColor:'green'}:{...styles.registerBox1, borderRightWidth:2, borderColor:'red'}}>
				<Text style={styles.registerTextBox1}>{item.quantidade} unidades</Text>
				<Text style={styles.registerTextBox1}>{item.preco} reais</Text>
			</View>
			<View style={styles.registerBox2}>
				<Text style={styles.registerTextBox2}>{date(item.createdAt)}</Text>
			</View>
			<View style={item.modo == 'entrada' ? styles.registerBox3Entry:styles.registerBox3Exit}>
				<Text style={styles.registerTextBox3}>{item.modo}</Text>
			</View>
		</View>
	)
}