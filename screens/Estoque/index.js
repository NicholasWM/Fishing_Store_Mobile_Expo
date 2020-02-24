
import React, {useState} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './Styles'

const search_icon = require('../../assets/images/search.png')

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },

    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad253abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd391aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-1445571e29d72',
        title: 'Third Item',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad513abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-f4bd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-6145571e29d72',
        title: 'Third Item',
      },
      {
        id: 'bd7acbea-2c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-4a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-1455711e29d72',
        title: 'Third Item',
      },
      {
        id: 'bd7acbea-3c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68a4fc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-53da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
  ];

import { Text,
         View,
         FlatList,
         SafeAreaView,
         TextInput,
         Image
} from 'react-native';

export default function EstoqueScreen(){
    const [pesquisa, setPesquisa] = useState('')

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
                <Text>Estoque</Text>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Text style={styles.produto}>{item.title}</Text>}
                    keyExtractor={item => item.id}
                    style={styles.scrollProdutos}
                />
            </SafeAreaView>
        </View>
    )
}