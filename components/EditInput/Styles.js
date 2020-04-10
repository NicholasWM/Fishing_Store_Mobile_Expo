import {testeStyle} from '../../helpers/Style'
import { StyleSheet } from 'react-native'

const box = {
    flexDirection:'row', width:"90%",
    justifyContent:'space-between', alignItems:'center',
    borderColor: 'black', borderRadius: 25, borderWidth:2,
    backgroundColor:'yellow', margin:10
}
const text = {
    fontSize: 18,
    color:'white', fontWeight:'bold',
    textShadowColor:"black", 
    textShadowOffset: {width: 1, height:1},
    textShadowRadius:6
}
const boxContent = {
    width:"50%", height:80,
    borderWidth:2, borderColor:'black', borderRadius:20,
    justifyContent:'flex-end'
}
export default StyleSheet.create({
    boxTextInput:{
        ...text,
        color:'black',
    },
    boxTextContent:{
        ...boxContent,
        ...text,
        textAlign:'center',
        textAlignVertical:'center',
        backgroundColor:'#F50909',

    },
    boxContainerInput:{
        ...box, backgroundColor:'white'
    }
})