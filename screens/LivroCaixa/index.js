import React, {useEffect} from 'react'
import {
	View,
	Text,
	FlatList
} from 'react-native'

import {useSelector, useDispatch} from 'react-redux'

import {fetchLivroCaixaData, deactivateSearchAction} from '../../store/fetchActions'
import RegistroEntradaSaida from '../../components/RegistroEntradaSaida'
import ValoresCaixa from '../../components/ValoresCaixa'

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

			<ValoresCaixa
				credito={220}
				dinheiro={10}
				debito={0}
			/>
		</View>
	)
}