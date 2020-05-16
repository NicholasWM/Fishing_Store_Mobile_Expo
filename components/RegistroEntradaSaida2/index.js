import React from 'react'
import {View, Text, ImageBackground} from 'react-native'
import styles from './Style'
import {date} from '../../helpers/Date'
import {getImage} from '../../helpers/Image'


export default function RegistroEntradaSaida2({modo, produto_id, preco, label1_box, label2_box, nome_imagem, data}){
	return (
		<View key={produto_id} style={modo == 'entrada'||modo.toLowerCase() == 'em aberto'?styles.stockItemContainerEntrada:styles.stockItemContainerSaida}>
			<View style={styles.dataItemContainer}>
				<Text style={styles.textItemContainer}>{date(data)}</Text>
				<Text style={modo == 'entrada'||modo.toLowerCase() == 'em aberto'?styles.modoEntrada:styles.modoSaida}>{modo}</Text>
				<Text style={styles.textItemContainer}>{preco} reais</Text>
			</View>
			<ImageBackground style={ styles.dataItemSecondContainer } blurRadius={5} borderRadius={22} source={nome_imagem ? getImage(nome_imagem): null}>
				<Text style={styles.textItemContainerWhite}>{label1_box}</Text>
				<Text style={styles.textItemContainerWhite}>{label2_box}</Text>
			</ImageBackground>
		</View>
	)
}
