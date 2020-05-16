
import React, {useEffect} from 'react';
import {View,
        Button,
        FlatList,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux'
import { getHistoryStock } from '../../store/fetchActions'
import { setSearch, activateSearchAction } from '../../store/fetchActions'
import RegistroEntradaSaida2 from '../../components/RegistroEntradaSaida2'

export default function HistoricoEstoqueScreen({navigation}){

    const historyStock = useSelector(({estoque}) => estoque.all)
	const dispatch = useDispatch()

    useEffect(()=>
        navigation.addListener('focus', () => {
            dispatch(activateSearchAction())
            dispatch(setSearch('estoque'))
        })
    ,[navigation])

	useEffect(()=>{
        dispatch(getHistoryStock())
    },[dispatch])

	function handleCarregarDados(){dispatch(getHistoryStock())}

    return (
        <>
			{historyStock && historyStock.length?(
				<FlatList
				style={{borderColor:'red', borderWidth:2}}
					data={historyStock}
					renderItem={({item}) => {
						const {modo, preco, quantidade, createdAt, produto_id, produto} = item
						return <RegistroEntradaSaida2 modo={modo}
						produto_id={produto_id}
									preco={preco}
									label1_box={produto.nome}
									label2_box={`${quantidade} unidades`}
									nome_imagem={produto.imagem}
									data={createdAt}
									/>
								}}

								keyExtractor={(item, index)=> String(index)}
				/>
				):(
					<View style={{justifyContent:'center', flex:1}}>
						<Button  color="red" title="Carregar Dados" onPress={handleCarregarDados}/>
					</View>
				)}
        </>
    )
}