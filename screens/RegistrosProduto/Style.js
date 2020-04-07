import {testeStyle} from '../../helpers/Style'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    form:{
        ...testeStyle,
        flex:1.2,
        alignItems:'center',
        justifyContent:'center'
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
        height:60,
        width:"90%",
        alignItems:'center',
        justifyContent:'center',
        borderColor:'orange', borderWidth:5,
        marginBottom:20,
    },
    submitInputText:{
        ...testeStyle,
        textAlignVertical:'center',
        alignItems:'center',
        textAlign:'center',
        fontSize:20
    },
})
