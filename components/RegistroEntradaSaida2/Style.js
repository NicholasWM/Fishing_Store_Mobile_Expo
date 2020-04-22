import {StyleSheet} from 'react-native';
const testeStyle = require('../../helpers/Style').testeStyle
const modo ={
    fontSize: 30, textAlign:'center',
    textTransform:"capitalize", textShadowColor:"black",
    textShadowOffset: {width: 1, height:0}, textShadowRadius:1
}
const stockItemContainer = {
    ...testeStyle,
    borderWidth:2, borderRadius: 25,
    flexDirection:'row', justifyContent:'space-between',
    margin:10
}
const dataItemContainer = {
    flexDirection:'column', marginLeft:20,
    justifyContent:'center'
}
const textItemContainer = {
    fontSize: 22, textAlign:'center'
}
export default StyleSheet.create({
    stockItemContainer, dataItemContainer,
    textItemContainer,
    textItemContainerWhite:{
        ...textItemContainer,
        color:'white',
        textTransform:"capitalize", textShadowColor:"black",
        textShadowOffset: {width: 1, height:1}, textShadowRadius:5,
        width: "100%"
    },
    modoEntrada:{
        ...modo, color:"green",
    },
    modoSaida:{
        ...modo, color:'red'
    },
    stockItemContainerEntrada:{
        ...stockItemContainer,
        borderColor:'green',
    },
    stockItemContainerSaida:{
        ...stockItemContainer,
        borderColor:'red',
    },
    dataItemSecondContainer:{
        ...dataItemContainer,
        flex:0.9,
        resizeMode: "cover",
        justifyContent: "center",
		padding:10,
		backgroundColor:'#252525',
		borderRadius:22
    }
})