import {StyleSheet} from 'react-native'

const testeStyle = require('../../helpers/Style').testeStyle
const patterns = {
    registerText:{
        textAlign:'center', color:'white',
    },
    registerBox3:{
        // ...testeStyle,
        justifyContent:'center',
        height:50,
        width:'30%'
    }
}
export default StyleSheet.create({
    imagemProduto:{
        // ...testeStyle,
        width:"95%", height:200, margin:8,
        borderWidth:2, borderColor:'black', borderRadius:25,
        justifyContent:'flex-end'
    },
    campoInput:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'90%',
        marginBottom:10
    },
    inputBox:{
        height:70,
        flex:0.7,
        textAlign:'center',
        borderWidth:2, borderColor:'black',
    },
    inputName:{
        fontSize:16,
        alignItems:'center',
        width:"90%"
    },
    submitInput:{
        flex:0.3,
        height:80,
        justifyContent:'center',
    },
    submitInputText:{
        textAlignVertical:'center',
        alignItems:'center',
        textAlign:'center'
    },
    opcoes:{
        alignItems:'center',
        bottom:0
    },
    opcoesEstoque:{
        flexDirection:'row',
        width:'100%',
        
        justifyContent:'space-around'
    },
    botaoEstoque:{
        height:70,
        width:'50%',
        justifyContent:'center',
    },
    botaoIcon:{
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
    registerContainer: {
        borderColor:'red', borderWidth:3, borderRadius:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#444141',
        margin:5
    },
    registerTextBox1:{
        ...patterns.registerText,
        marginRight:15,
        marginLeft:15,
        fontSize:13
    },
    registerTextBox2:{
        ...patterns.registerText,
    },
    registerTextBox3:{
        ...patterns.registerText,
        textTransform:'uppercase',
        fontWeight:'bold',
        fontSize:17
    },
    registerBox1:{
        ...patterns.registerBox3,
    },
    registerBox3Entry:{
        ...patterns.registerBox3,
        backgroundColor:'green',
    },
    registerBox3Exit:{
        ...patterns.registerBox3,
        backgroundColor:'red',
    },
})