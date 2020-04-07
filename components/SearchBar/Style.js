import {StyleSheet} from 'react-native';
const testeStyle = require('../../helpers/Style').testeStyle

const globals = {

}
export default StyleSheet.create({
    container:{
        // ...testeStyle,
        flex:1,
        alignItems:'center',
        textAlign:'center',
        // justifyContent: "space-around"
    },
    inputPesquisa:{
        
        fontSize:18, textAlign:'center',
        width:'83%', height: '100%',
        
        borderRadius:25,
        borderWidth:2,
        borderColor: 'orange',

        backgroundColor:'#fff',

    },

    pesquisa:{
        ...testeStyle,
        // flex:1,
        width:'95%',
        height:"100%",
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

        // padding: 10,
        // margin:10,

    },

    pesquisaSubmit:{
        ...testeStyle,
        width:40,
        height:"100%",
        justifyContent:'center'
    },
    pesquisaImg:{
        // ...testeStyle,
        width: 25, height: 25,
        alignSelf:'center'
    },
})