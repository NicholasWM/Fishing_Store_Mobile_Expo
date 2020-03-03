
import { StyleSheet } from 'react-native';
const {testeStyle} = require('../../helpers/style/index')
// console.log(testeStyle)
export default StyleSheet.create({
    corpoBTN:{
        ...testeStyle,
        alignItems:"center",
        alignSelf:"center",
        borderWidth:2,
        borderColor:"black",
        borderRadius:60,
        // height:"15%",
        justifyContent:"center",
        backgroundColor:"orange",
        width:"90%",
        margin:10
    },
    textoBTN:{
        fontSize:20,
        color:"white",
        fontFamily:"Times",
        fontWeight:"bold"
    }
})