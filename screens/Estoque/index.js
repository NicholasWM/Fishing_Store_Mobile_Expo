import React, {useState, useEffect} from 'react';
import { Text,
  View,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ScrollCategoriasItems from '../../components/ScrollCategoriaItems'

import styles from './Styles'

import {getProductsByCategory, setSearch, activateSearchAction } from '../../store/fetchActions'
import {useSelector, useDispatch} from 'react-redux'

export default function EstoqueScreen({navigation}){

    const produtos = useSelector(({produtos})=>produtos.estoque)

    const dispatch = useDispatch()
    useEffect(()=>
      navigation.addListener('focus', () => {
        dispatch(activateSearchAction())
        dispatch(setSearch('produtos'))
      })
    ,[navigation])
    useEffect(()=>{
      dispatch(getProductsByCategory())
    },[dispatch])
    const renderCategoria = (item)=> {
      return(
        <View style={styles.containerCategoria}>
          <Text style={styles.tituloCategoria}>{item.categoria}</Text>
          <ScrollCategoriasItems
            produtos={item.produtos}
            onPressEvent={(prod)=> navigation.navigate('VisualizarProduto', prod)}/>
            <TouchableOpacity style={styles.botaoVerTodos}>
              <Text style={styles.textoVerTodos}>Ver Todos</Text>
          </TouchableOpacity>
        </View>
    )}
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.scrollProdutosContainer}>
                <FlatList
                    data={produtos.length ? produtos : []}
                    renderItem={({ item }) => renderCategoria(item)}
                    keyExtractor={({categoria}) => categoria}
                    style={styles.scrollProdutos}
                />
            </SafeAreaView>
        </View>
    )
}