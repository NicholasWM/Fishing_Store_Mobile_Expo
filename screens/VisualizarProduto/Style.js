import {StyleSheet} from 'react-native'

const testeStyle = require('../../helpers/Style').testeStyle
export default StyleSheet.create({
    debug:{
        ...testeStyle
    },
    container:{
        ...testeStyle,
        alignItems:'center'

    },
    imagemProduto:{
        ...testeStyle,
        width:"100%", height:200, marginTop:15,
        borderWidth:2, borderColor:'orange',
        justifyContent:'flex-end'
    },
    botaoTrocarImagem:{
        ...testeStyle,
        height:40,
        alignContent:'center',
        justifyContent:'center',
        borderWidth:5, borderColor:'white',
        backgroundColor:'#333'
    },
    botaoTrocarImagemTexto:{
        ...testeStyle,
        textAlign:'center',
        color:'orange',
        fontSize:20
    },
    campoInput:{
        ...testeStyle,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'90%',
        marginBottom:10
    },
    inputBox:{
        ...testeStyle,
        height:70,
        flex:0.7,
        textAlign:'center',
        borderWidth:2, borderColor:'black',
    },
    inputName:{
        ...testeStyle,
        fontSize:16,
        alignItems:'center',
        width:"90%"
    },
    submitInput:{
        ...testeStyle,
        flex:0.3,
        height:80,
        justifyContent:'center',
    },
    submitInputText:{
        ...testeStyle,
        textAlignVertical:'center',
        alignItems:'center',
        textAlign:'center'
    },
    opcoes:{
        alignItems:'center'
    },
    opcoesEstoque:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around'
    },
    botaoEstoque:{
        ...testeStyle,
        height:70,
        width:'50%',
        justifyContent:'center',
    },
    botaoIcon:{
        ...testeStyle,
        alignItems:'center',
        alignSelf:'center',
        height:40, width:40, tintColor:'#333'
    },
    botaoIconDesc:{
        textAlign:'center',
        alignSelf:'center'
    },
    salvarAlteracoesButton:{
        width:'100%',
        height:40,
        alignItems:'center',
        justifyContent:'center'
    },
    salvarAlteracoesTexto:{
        fontSize:20,
    },

})