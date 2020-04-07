
import React, {
    useEffect,
} from 'react';

import { Text,
        View,
        FlatList,
        ImageBackground
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import {  getHistoryStock } from '../../store/fetchActions'
import { SafeAreaView } from 'react-native-safe-area-context';
import { getProductsByCategory, setSearch, activateSearchAction } from '../../store/fetchActions'
import {baseURL} from '../../services/api'
import styles from './Styles'

export default function HistoricoEstoqueScreen({navigation}){

    const historyStock = useSelector(({estoque}) => estoque)
    const dispatch = useDispatch()
    useEffect(()=> 
        navigation.addListener('focus', () => {
            dispatch(activateSearchAction())
            dispatch(setSearch('estoque'))
        })
    ,[navigation])
    useEffect(()=>{
        dispatch(getHistoryStock())
    },[dispatch])

    const stockHistoryItem = ({modo, preco, quantidade, createdAt, produto_id, produto})=>{
        const date = `${new Date(createdAt).getDate()}/${new Date(createdAt).getUTCMonth() + 1}/${new Date(createdAt).getFullYear()}`
        return(
        <View key={produto_id} style={modo == 'entrada'?styles.stockItemContainerEntrada:styles.stockItemContainerSaida}>
            <View style={styles.dataItemContainer}>
                <Text style={styles.textItemContainer}>{date}</Text>
                <Text style={modo == 'entrada'?styles.modoEntrada:styles.modoSaida}>{modo}</Text>
                <Text style={styles.textItemContainer}>{preco} reais</Text>
            </View>
            <ImageBackground style={ styles.dataItemSecondContainer } blurRadius={5} borderRadius={22} source={{ uri: `${baseURL}/files/${produto.imagem}` }}>
                <Text style={styles.textItemContainerWhite}>{produto.nome}</Text>
                <Text style={styles.textItemContainerWhite}>{quantidade} unidades</Text>
            </ImageBackground>
        </View>
    )}
    return (
        <FlatList
            style={{borderColor:'red', borderWidth:2}}
            data={historyStock}
            renderItem={({item}) => stockHistoryItem(item)}
            keyExtractor={(item) => String(item.id)}
        />
    )
}