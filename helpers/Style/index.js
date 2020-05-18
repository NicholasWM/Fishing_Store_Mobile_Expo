const testar_estilos = 1
module.exports ={
    testeStyle: ((ligar) => ligar ? { borderColor: "red", borderWidth: 1 } : {})(testar_estilos),
    iconImage:{height:30, width:30},
	colorPallet:["#EFFFCD","#DCE9BE","#555152","#2E2633","#FF5203", "#78FF8F", "#DF7DF0", "#3086FF"],
	textShadow: {textShadowColor:"black",textShadowOffset: {width: 1, height:1}, textShadowRadius:5}
}
