import React from 'react';
import { TouchableOpacity,ScrollView, SafeAreaView } from 'react-native-gesture-handler';
import {baseURL} from '../../services/api'
import { Text,View,Image, FlatList } from 'react-native';
import styles from './Style'

export default function ScrollCategoriasItems({produtos, onPressEvent}){
    const renderProduto = (produto, index)=>{
      return (
        <View key={index} style={styles.containerProduto}>
          <TouchableOpacity 
            onPress={()=>(
              prod => onPressEvent(prod))(produto)
            }>
              <Image 
                source={{ uri: `${baseURL}/files/${produto.imagem}` }}
                style={styles.imagemProduto} />
          </TouchableOpacity>
          <Text style={styles.labelDesc}>{produto.nome}</Text>
          <Text style={styles.labelDesc}>Preço: {produto.preco} reais</Text>        
          <Text style={styles.labelDesc}>Unidades: {produto.quantidade}</Text>
        </View>
      )
    }
    return (
      <FlatList
        style={styles.scrollContainer}
        horizontal={true}
        data={produtos}
        keyExtractor={({id})=>String(id)}
        renderItem={(produto, index)=> renderProduto(produto.item, index)}
      />
    )
}