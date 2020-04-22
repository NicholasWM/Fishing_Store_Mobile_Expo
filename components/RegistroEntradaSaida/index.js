import React from 'react'
import {View, Text} from 'react-native'
import styles from './Style'
import {date} from '../../helpers/Date'


export default function RegistroEntradaSaida({item}){
	return (
		<View style={item.modo.toLowerCase() == 'entrada' ? {...styles.registerContainer , flexDirection:'row-reverse', borderColor:'green'}:styles.registerContainer}>
			<View style={item.modo.toLowerCase() == 'entrada' ? {...styles.registerBox1, borderLeftWidth:2, borderColor:'green'}:{...styles.registerBox1, borderRightWidth:2, borderColor:'red'}}>
				{item.quantidade && <Text style={styles.registerTextBox1}>{item.quantidade} unidades</Text>}
				{item.preco && <Text style={styles.registerTextBox1}>{item.preco} reais</Text>}
			</View>
			<View style={styles.registerBox2}>
				<Text style={styles.registerTextBox2}>{date(item.createdAt)}</Text>
			</View>
			<View style={item.modo.toLowerCase() == 'entrada' ? styles.registerBox3Entry:styles.registerBox3Exit}>
				<Text style={styles.registerTextBox3}>{item.modo}</Text>
			</View>
		</View>
	)
}