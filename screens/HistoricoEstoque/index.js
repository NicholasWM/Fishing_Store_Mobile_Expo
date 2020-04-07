
import React, {
    useState, useEffect,
} from 'react';

import { Text,
        View,
        FlatList
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import { addStockData } from '../../store/ducks/estoque'
import {  getHistoryStock } from '../../store/fetchActions'
import { SafeAreaView } from 'react-native-safe-area-context';
import {getProductsByCategory, setSearch, activateSearchAction } from '../../store/fetchActions'

export default function HistoricoEstoqueScreen({navigation}){

    const historyStock = useSelector(({estoque}) => estoque)
    const dispatch = useDispatch()
    useEffect(()=> {
        return navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action
            dispatch(activateSearchAction())
          });
      },[navigation])
    useEffect(()=>{
        dispatch(getHistoryStock())
        // dispatch(activateSearchAction())
    },[dispatch])

    const stockHistoryItem = ({modo, preco, quantidade, createdAt, produto_id})=>(
        <View key={produto_id} style={{borderColor:'red', borderWidth:1,flexDirection:'row', padding:8, justifyContent:'space-around'}}>
            <Text style={{width:"25%", textAlign:'center'}}>{modo}</Text>
            <Text style={{width:"25%", textAlign:'center'}}>{preco}</Text>
            <Text style={{width:"25%", textAlign:'center'}}>{quantidade}</Text>
            <Text style={{width:"25%", textAlign:'center'}}>{new Date(createdAt).getUTCDate()}</Text>
        </View>
    )
    return (
        <SafeAreaView>
            <View style={{borderColor:'red', borderWidth:1,flexDirection:'row', padding:8, justifyContent:'space-around'}}>
                <Text style={{fontWeight:'bold', fontSize:15, width:"25%", textAlign:'center'}}>Modo</Text>
                <Text style={{fontWeight:'bold', fontSize:15, width:"25%", textAlign:'center'}}>Preco</Text>
                <Text style={{fontWeight:'bold', fontSize:15, width:"25%", textAlign:'center'}}>Quantidade</Text>
                <Text style={{fontWeight:'bold', fontSize:15, width:"25%", textAlign:'center'}}>Data</Text>
            </View>
            <FlatList
                data={historyStock}
                renderItem={({item}) => stockHistoryItem(item)}
                keyExtractor={(item) => String(item.id)}
            />
        </SafeAreaView>
    )
}