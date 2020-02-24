const testar_estilos = 1
module.exports ={ 
    testeStyle: ((ligar) => {
        return ligar ? { borderColor: "red", borderWidth: 1 } : {}
    })(testar_estilos),
    iconImage:{height:30, width:30}
}
