
import React, {
    useState
} from 'react';

import {baseURL} from '../../services/api'
import styles from './Style'
import { 
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput, ImageBackground
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const bookmark = require('../../assets/images/bookmark.png')
const edit = require('../../assets/images/edit.png')
const product_management = require('../../assets/images/product-management.png')

export default function AdicionarEstoqueScreen({route, navigation}){
    const {imagem} = route.params
    const  [nome, setNome] = useState('')
    const  [preco, setPreco] = useState('')
    const  [categoria, setCategoria] = useState('')

    const inputBox = (nomeProp, currentValue, state, setState, unidade="")=>{
        return (
            <>
                <Text style={styles.inputName}>{nomeProp}: {currentValue} {unidade}</Text>
                <View style={styles.campoInput}>
                    <TextInput 
                        onChangeText={txt => setState(txt)}
                        placeholder='Insira um novo valor'
                        style={styles.inputBox} value={state}/>
                    <TouchableOpacity style={styles.submitInput}>
                        <Image style={styles.botaoIcon} source={edit}/>
                        <Text style={styles.submitInputText}>Alterar</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
    return (
        <>
            <ScrollView 
                contentContainerStyle={styles.container} 
                centerContent={true} keyboardShouldPersistTaps='never'>
                    <ImageBackground style={styles.imagemProduto}
                        source={{ uri: `${baseURL}/files/${imagem}` }}>
                        <TouchableOpacity style={styles.botaoTrocarImagem}>
                            <Text style={styles.botaoTrocarImagemTexto}>Alterar imagem</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                {inputBox("Nome", route.params.nome, nome, setNome)}
                {inputBox("Categoria", route.params.categoria, categoria, setCategoria)}
                {inputBox("Preço", route.params.preco, preco, setPreco, 'reais')}

            </ScrollView>
            <View style={styles.opcoes}>
                <View style={styles.opcoesEstoque}>
                    <TouchableOpacity onPress={()=>navigation.navigate('RegistrosProduto',route.params)} style={styles.botaoEstoque}>
                        <Image style={styles.botaoIcon} source={bookmark}/>
                        <Text style={styles.botaoIconDesc}>Livro Caixa</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('AlterarEstoque',route.params)} style={styles.botaoEstoque}>
                        <Image style={styles.botaoIcon} source={product_management}/>
                        <Text style={styles.botaoIconDesc}>Estoque</Text> 
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}