import {StyleSheet} from 'react-native'
import {testeStyle, colorPallet} from '../../helpers/Style'
export default StyleSheet.create({
    container:{...testeStyle,flex:1, alignContent:'center', borderColor:'red', borderWidth:3},
    buttonGaleryPhotos:{
        ...testeStyle,
         borderColor: 'black', borderWidth:2, borderRadius:50,
         width:"45%",
         alignItems:'center',
         justifyContent:'center',
         margin:2,
         height:50,
         backgroundColor: colorPallet[7]
    },
    textButtonGaleryPhotos:{
        ...testeStyle,
        textAlign:'center',
        color:colorPallet[0]

    },
    boxSelectionPhotos:{
        ...testeStyle,
        flexDirection:'row',
        justifyContent:'center'
    },
    selectedImage:{width: "100%", height:200,flex:0.1,resizeMode: "contain"},
    submitButtonForm:{
        backgroundColor: colorPallet[7],
        borderRadius: 25,
        margin: 5,
    },
    textoSubmitButtonForm:{
        color: colorPallet[7]
    }

})