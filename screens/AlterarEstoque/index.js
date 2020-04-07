
import React, {
    useState, useEffect
} from 'react';
import { 
    Text,
    View,
    TouchableOpacity,
    FlatList,
    TextInput,
    Image
} from 'react-native';
import styles from './Style'
import {useSelector, useDispatch} from 'react-redux'

import {getHistoryStockById, fetchAddStock} from '../../store/fetchActions'

export default function AlterarEstoqueScreen({route, navigation}){
    const dispatch = useDispatch()

    const [quantidade, setQuantidade] = useState(0)
    const [custo, setCusto] = useState(0)
    const {id, nome} = route.params
    const estoque = useSelector(({estoque}) => estoque.selectedProduct)
    const renderHistorico = (item)=>{
        
        return (
            <View style={styles.itemsHistorico}>
                <Text>{item.modo}</Text>
                <Text>{item.quantidade}</Text>
                <Text>{item.preco}</Text>
                <Text>{new Date(item.createdAt).toUTCString()}</Text>
            </View>
        )
    }
    useEffect(()=>{
        dispatch(getHistoryStockById(id))
    },[dispatch])
    const handleSubmit = ()=> dispatch(fetchAddStock(({quantidade, custo, produto_id:id})))
    return (
        <>
            <View style={styles.form} keyboardType="number-pad">
                <Text style={styles.inputName}>Quantidade</Text>
                <View style={styles.campoInput}>
                    <TextInput
                        style={styles.inputBox}
                        autoFocus={true}
                        keyboardAppearance="dark" keyboardType="number-pad"
                        onChangeText={(txt)=>{setQuantidade(Number(txt))}}
                        placeholder="Quantidade" value={String(quantidade)}/>

                </View>
                <Text style={styles.inputName}>Custo</Text>
                <View style={styles.campoInput}>
                    <TextInput
                        style={styles.inputBox}
                        keyboardAppearance="dark" keyboardType="number-pad"
                        onChangeText={(txt)=>{setCusto(Number(txt))}}
                        placeholder="Custo" value={String(custo)}/>
                </View>
                <TouchableOpacity onPress={handleSubmit} style={styles.submitInput}>
                    <Text style={styles.submitInputText}>Enviar</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                    data={estoque}
                    renderItem={({item} ) => renderHistorico(item)}
                    keyExtractor={(item) => String(item.id)}
                    style={styles.historico}
            />
        </>
    )
}