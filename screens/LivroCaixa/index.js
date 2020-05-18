import React, {useEffect} from 'react'
import {
	View,
	FlatList,
	StyleSheet
} from 'react-native'

import {useSelector, useDispatch} from 'react-redux'

import {fetchLivroCaixaData, deactivateSearchAction} from '../../store/fetchActions'
import RegistroEntradaSaida from '../../components/RegistroEntradaSaida'

import ValoresCaixa from '../../components/ValoresCaixa'

export default function LivroCaixa({navigation}){
	const dadosLivroCaixa = useSelector(({livro_caixa}) => livro_caixa.registros)
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(fetchLivroCaixaData())
	},[])
	useEffect(()=>
		navigation.addListener('focus', () => {
			dispatch(deactivateSearchAction())
	}),[navigation])
	return (
		<View style={styles.dadosContainer}>
			<FlatList
				data={dadosLivroCaixa}
				renderItem={({item})=> <RegistroEntradaSaida item={{...item, modo: item.tipo_transacao, preco:item.valor}} /> }
				keyExtractor={(item, index)=> String(index)}
			/>

			<ValoresCaixa
				credito={220}
				dinheiro={10}
				debito={0}
			/>
		</View>
	)
}
const styles = StyleSheet.create({
	dadosContainer:{justifyContent:'space-evenly'},
})