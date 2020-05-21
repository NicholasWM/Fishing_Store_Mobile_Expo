import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import {textShadow} from '../../helpers/Style'
const barco_imagem = require('../../assets/images/barco.png')
const grupo_imagem = require('../../assets/images/grupo.png')

export default function DadoFrete({barqueiro, nome}) {
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