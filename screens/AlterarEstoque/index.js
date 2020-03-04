
import React, {
    useState
} from 'react';


import { 
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default function AlterarEstoqueScreen({route, navigation}){
    return (
        <View>
            <Text>AdicionarEstoque Screen</Text>
            <Text>{JSON.stringify(route.params)}</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('VisualizarProduto')}>
                <Text>Navegar</Text>
            </TouchableOpacity>
        </View>
        
    )
}