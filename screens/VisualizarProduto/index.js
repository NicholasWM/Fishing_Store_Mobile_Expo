
import React, {useState, useEffect} from 'react';

import {baseURL} from '../../services/api'
import styles from './Style'
import { 
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
const edit = require('../../assets/images/edit.png')
const add = require('../../assets/images/add.png')
import api from '../../services/api'
import {date} from '../../helpers/Date'

export default function AdicionarEstoqueScreen({route, navigation}){
    const {imagem, id} = route.params
    const [estoque, setEstoque] = useState([])
    useEffect(()=>{
        api.get(`/estoque/${id}/registros`)
            .then(({data})=> setEstoque(data))
    },[])

    const registro = ({item}) => (
        <View style={item.modo == 'entrada' ? {...styles.registerContainer , flexDirection:'row-reverse', borderColor:'green'}:styles.registerContainer}>
            <View style={item.modo == 'entrada' ? {...styles.registerBox1, borderLeftWidth:2, borderColor:'green'}:{...styles.registerBox1, borderRightWidth:2, borderColor:'red'}}>
                <Text style={styles.registerTextBox1}>{item.quantidade} unidades</Text>
                <Text style={styles.registerTextBox1}>{item.preco} reais</Text>
            </View>
            <View style={styles.registerBox2}>
                <Text style={styles.registerTextBox2}>{date(item.createdAt)}</Text>
            </View>
            <View style={item.modo == 'entrada' ? styles.registerBox3Entry:styles.registerBox3Exit}>
                <Text style={styles.registerTextBox3}>{item.modo}</Text>
            </View>
        </View>
    ) 

    return (
        <>
            <Image 
                style={styles.imagemProduto}
                source={{ uri: `${baseURL}/files/${imagem}` }}>
            </Image>
            <FlatList
                keyExtractor={(item, index)=> String(index)}
                renderItem={item => registro(item)}
                data={estoque}
            />
            <View style={styles.opcoes}>
                <View style={styles.opcoesEstoque}>
                    <TouchableOpacity onPress={()=>navigation.navigate('RegistrosProduto',route.params)} style={styles.botaoEstoque}>
                        <Image style={styles.botaoIcon} source={edit}/>
                        <Text style={styles.botaoIconDesc}>Editar</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('AlterarEstoque',route.params)} style={styles.botaoEstoque}>
                        <Image style={styles.botaoIcon} source={add}/>
                        <Text style={styles.botaoIconDesc}>Adicionar ao Estoque</Text> 
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}