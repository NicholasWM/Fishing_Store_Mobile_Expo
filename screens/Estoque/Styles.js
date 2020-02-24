import {StyleSheet} from 'react-native';
const testeStyle = require('../../helpers/Style').testeStyle

const globals = {

}
export default StyleSheet.create({
    container:{
        ...testeStyle,
        flex:1,
        alignItems:'center',
        textAlign:'center',
    },
    inputPesquisa:{
        
        fontSize:18, textAlign:'center',
        width:'80%', height: 50,
        
        borderRadius:25,
        borderWidth:2,
        borderColor: 'orange',

        backgroundColor:'#fff'
    },

    pesquisa:{
        ...testeStyle,
        // flex:1,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',

        padding: 10,
        margin:10,

    },

    pesquisaSubmit:{
        ...testeStyle,
        width:40,
        height:40,
        justifyContent:'center'
    },
    pesquisaImg:{
        ...testeStyle,
        width: 25, height: 25,
        alignSelf:'center'
    },
    scrollProdutosContainer:{
        ...testeStyle,
        width:'100%', flex:1,
    },
    scrollProdutos:{
        ...testeStyle,
        margin:10,
    },
    produto:{
        ...testeStyle,
        margin:10
    }

})