import React, {useState} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './Styles'

import data from '../../data'
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
    const renderCategoria = (item)=> {
      return(
        <View style={{alignItems:'center', marginBottom:10, borderColor:'orange', borderWidth:5,borderRadius:50, backgroundColor: "rgb(20,10,30)"}}>
          <Text style={{fontSize:18, fontWeight:'bold', padding:20, color:'#fff'}}>{item.categoria}</Text>

          <ScrollCategoriasItems
            produtos={item.produtos}
            onPressEvent={(prod)=>{setterModal(true); setConteudoModal(prod)}}
          />
          
          <TouchableOpacity 
            onPress={()=>{setterModal(true); setConteudoModal(item)}}
            style={{borderColor:'orange', borderTopWidth:3, width:300}}>
            <Text style={{padding:15,color:'white', fontSize:20, alignSelf:'center'}}>Ver Todos</Text></TouchableOpacity>
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
                    data={data.produtos}
                    renderItem={({ item }) => renderCategoria(item)}
                    keyExtractor={item => item.id}
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
                    // logs={errorLog}
                    // footer={footer(() => setterModal(false))}
                />

        </View>
    )
}