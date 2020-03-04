
import React, {
    useState
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
// const add = require('../../assets/images/return_arrow.png')
const data = [
    {id:1, tipo:'entrada', quantidade:'100', custo_unidade:2.5, createdAt:new Date()},
    {id:2, tipo:'entrada', quantidade:'200', custo_unidade:2.5, createdAt:new Date()},
    {id:3, tipo:'saida', quantidade:'500', custo_unidade:5.5, createdAt:new Date()},
    {id:4, tipo:'saida', quantidade:'200', custo_unidade:10, createdAt:new Date()},
    {id:5, tipo:'entrada', quantidade:'400', custo_unidade:20, createdAt:new Date()},
    {id:6, tipo:'saida', quantidade:'500', custo_unidade:2.5, createdAt:new Date()},
    {id:7, tipo:'entrada', quantidade:'200', custo_unidade:6, createdAt:new Date()},
    {id:8, tipo:'entrada', quantidade:'100', custo_unidade:20, createdAt:new Date()},
    {id:9, tipo:'entrada', quantidade:'100', custo_unidade:2.5, createdAt:new Date()},
    {id:10, tipo:'entrada', quantidade:'200', custo_unidade:2.5, createdAt:new Date()},
    {id:3, tipo:'saida', quantidade:'500', custo_unidade:5.5, createdAt:new Date()},
    {id:4, tipo:'saida', quantidade:'200', custo_unidade:10, createdAt:new Date()},
    {id:5, tipo:'entrada', quantidade:'400', custo_unidade:20, createdAt:new Date()},
    {id:6, tipo:'saida', quantidade:'500', custo_unidade:2.5, createdAt:new Date()},
    {id:7, tipo:'entrada', quantidade:'200', custo_unidade:6, createdAt:new Date()},
    {id:8, tipo:'entrada', quantidade:'100', custo_unidade:20, createdAt:new Date()},
    {id:1, tipo:'entrada', quantidade:'100', custo_unidade:2.5, createdAt:new Date()},
    {id:2, tipo:'entrada', quantidade:'200', custo_unidade:2.5, createdAt:new Date()},
    {id:3, tipo:'saida', quantidade:'500', custo_unidade:5.5, createdAt:new Date()},
    {id:4, tipo:'saida', quantidade:'200', custo_unidade:10, createdAt:new Date()},
    {id:5, tipo:'entrada', quantidade:'400', custo_unidade:20, createdAt:new Date()},
    {id:6, tipo:'saida', quantidade:'500', custo_unidade:2.5, createdAt:new Date()},
    {id:7, tipo:'entrada', quantidade:'200', custo_unidade:6, createdAt:new Date()},
    {id:8, tipo:'entrada', quantidade:'100', custo_unidade:20, createdAt:new Date()},
    {id:1, tipo:'entrada', quantidade:'100', custo_unidade:2.5, createdAt:new Date()},
    {id:2, tipo:'entrada', quantidade:'200', custo_unidade:2.5, createdAt:new Date()},
    {id:3, tipo:'saida', quantidade:'500', custo_unidade:5.5, createdAt:new Date()},
    {id:4, tipo:'saida', quantidade:'200', custo_unidade:10, createdAt:new Date()},
    {id:5, tipo:'entrada', quantidade:'400', custo_unidade:20, createdAt:new Date()},
    {id:6, tipo:'saida', quantidade:'500', custo_unidade:2.5, createdAt:new Date()},
    {id:7, tipo:'entrada', quantidade:'200', custo_unidade:6, createdAt:new Date()},
    {id:8, tipo:'entrada', quantidade:'100', custo_unidade:20, createdAt:new Date()},
]
export default function AlterarEstoqueScreen({route, navigation}){
    const [quantidade, setQuantidade] = useState(0)
    const [custo, setCusto] = useState(0)
    const {id, nome} = route.params
    const renderHistorico = (item)=>{
        return (
            <View style={styles.itemsHistorico}>
                <Text>{item.tipo}</Text>
                <Text>{item.quantidade}</Text>
                <Text>{item.custo_unidade}</Text>
                <Text>{item.createdAt.toUTCString()}</Text>
            </View>
        )
    }
    const handleSubmit = ()=>{
        console.log(`${quantidade},${custo},${id}`)
    }
    return (
        <>
            <View style={styles.form} keyboardType="number-pad">
                <Text style={styles.inputName}>Quantidade</Text>
                <View style={styles.campoInput}>
                    <TextInput
                        style={styles.inputBox}
                        keyboardAppearance="dark" keyboardType="number-pad"
                        onChangeText={(txt)=>{setQuantidade(Number(txt))}}
                        placeholder="Quantidade" value={quantidade}/>

                </View>
                <Text style={styles.inputName}>Custo</Text>
                <View style={styles.campoInput}>
                    <TextInput
                        style={styles.inputBox}
                        keyboardAppearance="dark" keyboardType="number-pad"
                        onChangeText={(txt)=>{setCusto(Number(txt))}}
                        placeholder="Custo" value={custo}/>
                </View>
                <TouchableOpacity onPress={handleSubmit} style={styles.submitInput}>
                    <Text style={styles.submitInputText}>Enviar</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                    data={data}
                    renderItem={({item} ) => renderHistorico(item)}
                    keyExtractor={(item) => item.index}
                    style={styles.historico}
            />
        </>
    )
}