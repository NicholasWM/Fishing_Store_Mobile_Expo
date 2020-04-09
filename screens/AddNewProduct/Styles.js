import {StyleSheet} from 'react-native'
import {testeStyle, colorPallet} from '../../helpers/Style'
export default StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        margin:10
    },
    buttonGaleryPhotos:{
        borderColor: 'black', borderWidth:2,
        height:98,        
        justifyContent:'center',
        alignItems:'center',
        width: 170,
        backgroundColor: colorPallet[7]
    },
    textButtonGaleryPhotos:{
        textAlign:'center',
        color:colorPallet[0],
        width:'80%'
    },
    boxSelectionPhotos:{
        flexDirection:'column',
        justifyContent:'space-evenly',
        marginLeft:2
    },
    selectedImage:{
        borderColor: 'black', borderWidth:2,
        width: "47%",
        resizeMode:'contain',
        height:200,
    },
    submitButtonForm:{
        backgroundColor: colorPallet[7],
        borderRadius: 25,
        margin: 5,
    },
    textoSubmitButtonForm:{
        color: colorPallet[7],
    }
})