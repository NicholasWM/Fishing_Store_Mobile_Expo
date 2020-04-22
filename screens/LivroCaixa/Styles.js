import {StyleSheet} from 'react-native'
import {testeStyle} from '../../helpers/Style'

export default StyleSheet.create({
	valoresContainer:{
		...testeStyle,
		flex: 0.3,
		justifyContent:'space-around',
		borderBottomWidth: 3,
		borderColor: 'black'
	},
	valor: {
		...testeStyle,
		flexDirection: 'row',
		borderTopWidth: 3,
		borderColor: 'black',
	},
	dadosContainer:{
		...testeStyle,
		flex:0.7
	},
	valorText:{
		...testeStyle,
		height:50,
		fontSize: 18,
		fontWeight:'bold',
		textAlign:'center',
		textAlignVertical:'center',
		width: "50%"
	}
})