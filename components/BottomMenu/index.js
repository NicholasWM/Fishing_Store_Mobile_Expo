
import React from 'react';

import {
    Text,
    View,
    TouchableOpacity,
    Image,
	StyleSheet,
	FlatList
} from 'react-native';


// listBotoes -> {onPress, Image, text}
export default function BottomMenu({listButtons}){
	const modeloBotao = ({onPress, image, text}, index) => (
		<TouchableOpacity key={index} onPress={onPress} style={styles.botaoEstoque}>
			<Image style={styles.botaoIcon} source={image}/>
			<Text style={styles.botaoIconDesc}>{text}</Text>
		</TouchableOpacity>
	)
    return (
		<View style={styles.opcoes}>
			<View style={styles.opcoesEstoque}>
				{listButtons.map((button, index) => modeloBotao(button, index))}

			</View>
		</View>
    )
}
const styles = StyleSheet.create({
    opcoes:{
        alignItems:'center',
        bottom:0
    },
    opcoesEstoque:{
        flexDirection:'row',
        width:'100%',

        justifyContent:'space-around'
    },
    botaoEstoque:{
        height:70,
        width:'50%',
        justifyContent:'center',
    },
    botaoIcon:{
        alignItems:'center',
        alignSelf:'center',
        height:40, width:40, tintColor:'#333'
    },
    botaoIconDesc:{
        textAlign:'center',
        alignSelf:'center'
    },
})