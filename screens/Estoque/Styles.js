import {StyleSheet} from 'react-native';
const testeStyle = require('../../helpers/Style').testeStyle

export default StyleSheet.create({
    container:{
        ...testeStyle,
        flex:1,
        alignItems:'center',
        textAlign:'center',
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
    },
    listaProdutos:{
        flexDirection:'row',
        justifyContent:'center'
    },
    containerCategoria:{
        alignItems:'center',
        marginBottom:10,
        borderColor:'orange', borderWidth:5, borderRadius:50,
        backgroundColor: "rgb(20,10,30)"
    },
    tituloCategoria:{
        fontSize:18, fontWeight:'bold',
        padding:20,
        color:'#fff'
    },
    botaoVerTodos:{
        borderColor:'orange', borderTopWidth:3,
        width:300
    },
    textoVerTodos:{
        padding:15,
        color:'white',
        fontSize:20,
        alignSelf:'center'
    }
})