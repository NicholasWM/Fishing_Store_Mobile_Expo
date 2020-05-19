import React, {useEffect} from 'react';

import styles from './Style'
import {
    Image,
    FlatList
} from 'react-native';

import RegistroEntradaSaida from '../../components/RegistroEntradaSaida'
import BottomMenu from '../../components/BottomMenu'

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

			<BottomMenu
				listButtons={[
					{onPress: ()=>navigation.navigate('EditarProduto',route.params), text: 'Editar', image: edit},
					{onPress: ()=>navigation.navigate('AlterarEstoque',route.params), text: 'Adicionar ao Estoque', image: add}
				]}
			/>
        </>
    )
}