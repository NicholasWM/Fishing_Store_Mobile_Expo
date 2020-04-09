
import React, { useEffect } from 'react';
import {
    Text, View, Image, TouchableOpacity
} from 'react-native';
import styles from './Style'
import {useSelector, useDispatch} from 'react-redux'

import { fetchAddStock } from '../../store/fetchActions'

import {getImage} from '../../helpers/Image/index'

export default function AlterarEstoqueScreen({route, navigation}){
    const dispatch = useDispatch()

    const estoque = useSelector(({estoque}) => estoque.selectedProduct)
    
    // useEffect(()=>{
    //     dispatch(getHistoryStockById(id))
    // },[dispatch])
    const handleSubmit = ()=> dispatch(fetchAddStock(({quantidade, custo, produto_id:id})))
    return (
        <>
            <TouchableOpacity style={styles.box}>
                <Text style={styles.boxText}>Alterar Imagem</Text>
                <Image 
                    style={styles.boxImage}
                    source={getImage(route.params.imagem)}/>
            </TouchableOpacity>
        </>
    )
}