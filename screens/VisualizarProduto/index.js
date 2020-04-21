
import React, {useEffect} from 'react';

import {baseURL} from '../../services/api'
import styles from './Style'
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';

import RegistroEntradaSaida from '../../components/RegistroEntradaSaida'

import {date} from '../../helpers/Date'
import {useSelector, useDispatch} from 'react-redux'
import {getHistoryStockById } from '../../store/fetchActions'
import {getImage} from '../../helpers/Image/index'

const edit = require('../../assets/images/edit.png')
const add = require('../../assets/images/add.png')

export default function AdicionarEstoqueScreen({route, navigation}){
    const {imagem, id} = route.params
    const dispatch = useDispatch()
    const estoque = useSelector(({estoque}) => estoque.selectedProduct)
    useEffect(()=>{
        dispatch(getHistoryStockById(id))
    },[dispatch])

    return (
        <>
            <Image
                style={styles.imagemProduto}
                source={getImage(imagem)}>
            </Image>
            <FlatList
                keyExtractor={(item, index)=> String(index)}
                renderItem={item => <RegistroEntradaSaida item={item.item} />}
                data={estoque}
            />
            <View style={styles.opcoes}>
                <View style={styles.opcoesEstoque}>
                    <TouchableOpacity onPress={()=>navigation.navigate('EditarProduto',route.params)} style={styles.botaoEstoque}>
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