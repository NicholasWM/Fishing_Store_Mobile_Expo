import {testeStyle} from '../../helpers/Style'
import { StyleSheet } from 'react-native'
const text = {
    margin:5, height:40,
    borderColor:'black', borderWidth:2, borderRadius:20,
    textAlign:'center', textAlignVertical:'center', fontSize:20,
    color:'white',
    textShadowColor:"black", 
    textShadowOffset: {width: 1, height:-1},
    textShadowRadius:6
}
export default StyleSheet.create({
    form:{
        ...testeStyle,
        flex:1.2,
        alignItems:'center',
        padding:10,
        justifyContent:'flex-start'
    },
    historico:{
        ...testeStyle,
        flex:0.2,
    },
    itemsHistorico:{flexDirection:'row', justifyContent:'space-between'},
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
        flex:1,
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
        flexDirection:'row',
        height:80,
        width:"90%",
        alignItems:'center',
        justifyContent:'space-between',
        borderColor:'orange', borderWidth:5,
        borderRadius:25,
        marginBottom:20,
        backgroundColor:'black'
    },
    submitInputText:{
        ...testeStyle,
        textAlignVertical:'center',
        alignItems:'center',
        textAlign:'center',
        fontSize:20
    },
    textCategoria: {
        ...text,
        backgroundColor:'#FFB800',
        width:"90%",
    },
    textNomeProduto: {
        ...text,
        backgroundColor:'#047EB2',
        width:"80%",
    },
    textPreco: {
        ...text,
        backgroundColor:'#07FF02',
        width:"70%",
    },
})
