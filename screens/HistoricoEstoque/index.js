
import React, {
    useEffect,
} from 'react';

import { Text,
        View,
        FlatList,
        ImageBackground
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import {getImage} from '../../helpers/Image'
import { getHistoryStock } from '../../store/fetchActions'
import { setSearch, activateSearchAction } from '../../store/fetchActions'
import styles from './Styles'
import {date} from '../../helpers/Date'
export default function HistoricoEstoqueScreen({navigation}){

    const historyStock = useSelector(({estoque}) => estoque.all)
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
        return(
        <View key={produto_id} style={modo == 'entrada'?styles.stockItemContainerEntrada:styles.stockItemContainerSaida}>
            <View style={styles.dataItemContainer}>
                <Text style={styles.textItemContainer}>{date(createdAt)}</Text>
                <Text style={modo == 'entrada'?styles.modoEntrada:styles.modoSaida}>{modo}</Text>
                <Text style={styles.textItemContainer}>{preco} reais</Text>
            </View>
            <ImageBackground style={ styles.dataItemSecondContainer } blurRadius={5} borderRadius={22} source={getImage(produto.imagem)}>
                <Text style={styles.textItemContainerWhite}>{produto.nome}</Text>
                <Text style={styles.textItemContainerWhite}>{quantidade} unidades</Text>
            </ImageBackground>
        </View>
    )}
    return (
        <>
        <Text>{historyStock?"":JSON.stringify(historyStock)}</Text>
            <FlatList
                style={{borderColor:'red', borderWidth:2}}
                data={historyStock}
                renderItem={({item}) => stockHistoryItem(item)}
                keyExtractor={(item, index)=> String(index)}
            />
        </>
    )
}