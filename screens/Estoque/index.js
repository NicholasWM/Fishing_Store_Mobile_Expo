import React, {useState} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './Styles'

import data from '../../data'
import {useSelector} from 'react-redux'
import Modal from '../../components/Modal'
import ScrollCategoriasItems from '../../components/ScrollCategoriaItems'
const search_icon = require('../../assets/images/search.png')

import { Text,
         View,
         FlatList,
         SafeAreaView,
         TextInput,
         Image,
} from 'react-native';
function modalContent(item){
  return (
    <Text>{JSON.stringify(item)}</Text>
  )
}
export default function EstoqueScreen(){
    const [pesquisa, setPesquisa] = useState('')
    const [visibleModal, setterModal] = useState(false)
    const [conteudoModal, setConteudoModal]=useState({})

    const produtos = useSelector(({produtos})=>produtos)

    const renderCategoria = (item)=> {
      return(
        <View style={styles.containerCategoria}>
          <Text style={styles.tituloCategoria}>{item.categoria}</Text>

          <ScrollCategoriasItems
            produtos={item.produtos}
            onPressEvent={(prod)=>{setterModal(true); setConteudoModal(prod)}}/>

          <TouchableOpacity onPress={()=>{setterModal(true); setConteudoModal(item)}}
            style={styles.botaoVerTodos}>

            <Text style={styles.textoVerTodos}>
                Ver Todos
            </Text>
          </TouchableOpacity>
        </View>
    )}
    function handlePesquisar(){console.log(`Pesquisando > ${pesquisa}`)}
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
            <Modal
                    setterModal={setterModal}
                    animationType="slide"
                    transparent={false}
                    visibleModal={visibleModal}
                    titulo={"titulo"}
                    conteudo={modalContent(conteudoModal)}
                />

        </View>
    )
}