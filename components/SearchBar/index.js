import React, {useState} from 'react';
import { Image, TouchableOpacity, View, TextInput, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import styles from './Style'
import search_icon from '../../assets/images/search.png'
export default function SearchBar({navigation, route, INITIAL_ROUTE_NAME}) {
  const [pesquisa, setPesquisa] = useState('')

  const dispatch = useDispatch()
  const search = useSelector(({search}) => search)


  function handlePesquisar(){console.log(`Pesquisando > ${pesquisa}`)}
  return (
    <View style={styles.container}>
      {search.active && (
        <View style={styles.pesquisa}>
            {/* <Text>{JSON.stringify(search)}</Text> */}
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
      )}
    </View>
  )
}