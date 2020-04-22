import React, {useEffect} from 'react'
import {
	View,
	Text,
	FlatList
} from 'react-native'

import {useSelector, useDispatch} from 'react-redux'

import {fetchLivroCaixaData, deactivateSearchAction} from '../../store/fetchActions'
import RegistroEntradaSaida from '../../components/RegistroEntradaSaida'

import styles from './Styles'

export default function LivroCaixa({navigation}){
	const dadosLivroCaixa = useSelector(({livro_caixa}) => livro_caixa)
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(fetchLivroCaixaData())
	},[])
	useEffect(()=>
		navigation.addListener('focus', () => {
			dispatch(deactivateSearchAction())
	}),[navigation])
	return (
		<View style={{flex:1}}>
			<Text
				style={{fontSize:20, textAlign:'center'}}>
					Livro Caixa</Text>
			<View style={styles.dadosContainer}>
				<FlatList
					data={dadosLivroCaixa}
					renderItem={({item})=> <RegistroEntradaSaida item={{...item, modo: item.tipo_transacao, preco:item.valor}} /> }
				/>
			</View>
			<View style={styles.valoresContainer}>
				<View style={styles.valor}>
					<Text style={styles.valorText}>Dinheiro:</Text>
					<Text style={styles.valorText}>10 reais</Text>
				</View>
				<View style={styles.valor}>
					<Text style={styles.valorText}>Crédito:</Text>
					<Text style={styles.valorText}>220 reais</Text>
				</View>
				<View style={styles.valor}>
					<Text style={styles.valorText}>Débito:</Text>
					<Text style={styles.valorText}>0 reais</Text>
				</View>
			</View>
		</View>
	)
}