import React, {useState, useEffect} from 'react';
import { Text,
  View,
  FlatList,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ScrollCategoriasItems from '../../components/ScrollCategoriaItems'

import styles from './Styles'

import {getProductsByCategory} from '../../store/fetchActions'
import {useSelector, useDispatch} from 'react-redux'

const search_icon = require('../../assets/images/search.png')

export default function EstoqueScreen({navigation}){
    const [pesquisa, setPesquisa] = useState('')
    
    const produtos = useSelector(({produtos})=>produtos)
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
      dispatch(getProductsByCategory())
    },[dispatch])
    function handlePesquisar(){console.log(`Pesquisando > ${pesquisa}`)}
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
            <View style={styles.pesquisa}>
                <TextInput
                    style={styles.inputPesquisa}
                    value={pesquisa}
                    placeholder="Pesquisar Produtos"
                    onChangeText={txt => setPesquisa(txt)}
                />
                <TouchableOpacity
                    onPress={handlePesquisar}
                    style={styles.pesquisaSubmit}>
                    <Image
                        style={styles.pesquisaImg}
                        source={search_icon}/>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.scrollProdutosContainer}>
                <FlatList
                    data={produtos}
                    renderItem={({ item }) => renderCategoria(item)}
                    keyExtractor={({categoria}) => categoria}
                    style={styles.scrollProdutos}
                />
            </SafeAreaView>
        </View>
    )
}