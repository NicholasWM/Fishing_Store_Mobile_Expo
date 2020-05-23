import React from 'react'

import {
	Text,
	View,
	StyleSheet,
	ImageBackground
} from 'react-native';

import {getImage} from '../../helpers/Image'
import {textShadow} from '../../helpers/Style'
import {useSelector} from 'react-redux'

export default function ProdutoInfoImage({produto}){
	const nova_compra = useSelector(({produtos}) => produtos.nova_compra)
	const dados_produto = nova_compra.filter(compra => compra.produto_id == produto.id)[0]
	const {quantidade} = dados_produto
	const {id, preco, nome, imagem} = produto
	const preco_total = quantidade * preco
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