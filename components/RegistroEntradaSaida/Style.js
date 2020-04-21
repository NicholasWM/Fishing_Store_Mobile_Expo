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