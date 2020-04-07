
import React, {
    useState, useEffect
} from 'react';
import { 
    Text,
    View,
    TouchableOpacity,
    FlatList,
    TextInput,
    Image
} from 'react-native';
import styles from './Style'
import {useSelector, useDispatch} from 'react-redux'

import {getHistoryStockById, fetchAddStock} from '../../store/fetchActions'

export default function AlterarEstoqueScreen({route, navigation}){
    const dispatch = useDispatch()
    const {id} = route.params
    const estoque = useSelector(({estoque}) => estoque.selectedProduct)
    const renderHistorico = (item)=>{
        return (
            <View style={styles.itemsHistorico}>
                <Text>{item.modo}</Text>
                <Text>{item.quantidade}</Text>
                <Text>{item.preco}</Text>
                <Text>{new Date(item.createdAt).toUTCString()}</Text>
            </View>
        )
    }
    useEffect(()=>{
        dispatch(getHistoryStockById(id))
    },[dispatch])
    return (
        <>
            <FlatList
                    data={estoque}
                    renderItem={({item} ) => renderHistorico(item)}
                    keyExtractor={(item) => String(item.id)}
                    style={styles.historico}
            />
        </>
    )
}