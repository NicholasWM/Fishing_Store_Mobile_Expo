import React from 'react';
import { TouchableOpacity,ScrollView } from 'react-native-gesture-handler';
import baseURL from '../../services/api'
import { Text,
    View,
    Image,
} from 'react-native';
import styles from './Style'

export default function ScrollCategoriasItems({produtos, onPressEvent}){
    return (
        <ScrollView horizontal={true} style={styles.scrollContainer}>
            {produtos.map((produto, index)=>{
              return (
                <View style={styles.containerProduto}>
                  <TouchableOpacity onPress={()=>(prod=>onPressEvent(prod))(produto)}>
                    <Image key={index} source={{ uri: `${baseURL}/files/${produto.imagem}` }}
                    
                      style={styles.imagemProduto} />
                  </TouchableOpacity>
                  <Text style={styles.labelDesc}>{produto.nome}</Text>
                  <Text style={styles.labelDesc}>Preço: {produto.preco} reais</Text>        
                  <Text style={styles.labelDesc}>Unidades: {produto.quantidade}</Text>
                </View>
            )})}
          </ScrollView>
    )
}