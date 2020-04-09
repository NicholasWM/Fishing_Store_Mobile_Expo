import {testeStyle} from '../../helpers/Style'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    box:{
        flexDirection:'row', width:"90%",
        justifyContent:'space-between', alignItems:'center',
        borderColor: 'black', borderRadius: 25, borderWidth:2,
        backgroundColor:'yellow', margin:10
    },
    boxText:{
        marginLeft:20, fontSize: 18,
        color:'white', fontWeight:'bold',
        textShadowColor:"black", 
        textShadowOffset: {width: 1, height:1},
        textShadowRadius:6
    },
    boxImage:{
        width:"50%", height:80,
        borderWidth:2, borderColor:'black', borderRadius:20,
        justifyContent:'flex-end'  
    }
})