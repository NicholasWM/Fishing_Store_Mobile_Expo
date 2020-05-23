import api from '../../services/api'
import { addProducts,
		 addProduct,
		 updateNumberOfUnits,
		 addNovaCompra,
		 addProdutoNovaCompra,
		 removeProdutoNovaCompra,
		 resetNovaCompra,
} from '../ducks/produtos'

import { addStockData,
         addStockMultipleData,
         setSelectedStockProduct,
         addItemToSelectedStockProduct,
} from '../ducks/estoque'

import {
		changeSearch,
		activateSearch,
		deactivateSearch,
 } from '../ducks/search'

import {
		setLivroCaixaRegistros,
		getLivroCaixaDadosCompraSeleciona,
		pagarCompra,
} from '../ducks/livro_caixa'

import {
		getComprasData,
		alterarEstadoCompra,
		adicionarUmaCompra,
} from '../ducks/compras'
// Products
export const getProductsByCategory = () =>
    dispatch =>
        api.get('/produtos/categorias')
            .then(({data}) => dispatch(addProducts(data)))
            .catch(console.log)

export const fetchAddProduct = (nome, preco, categoria, image) =>
    async dispatch => {
        function getNameImage(uri){
            let nameImage = uri.split('/')
            return nameImage[nameImage.length - 1]
        }
        function getFileType(name){
            let nameImage = name.split('.')
            return nameImage[nameImage.length - 1]
        }
        const formData = new FormData()
            formData.append("picture", {
                uri:image.uri,
                name:getNameImage(image.uri),
                type: `${image.type}/${getFileType(getNameImage(image.uri))}`
            });
            formData.append("nome",nome );
            formData.append("preco",preco);
            formData.append("categoria",categoria);
            const response = await api({
                method: 'post',
                url: '/produtos',
                data: formData,
                headers: {'Content-Type': 'multipart/form-data' }
            })
            return dispatch(addProduct(response.data))
        }

// Stock
export const updateEstoque = ({quantidade, custo, produto_id, modo}) =>
    dispatch =>
        api.post('/estoque/registro', {produto_id, quantidade, custo, modo})
            .then(({data}) => {
                dispatch(updateNumberOfUnits({quantidade:data.quantidade, id:produto_id, modo}))
                dispatch(addItemToSelectedStockProduct(data))
            })
            .catch(console.error)
export const getHistoryStock = () =>
    dispatch =>
        api.get('/estoque')
            .then(({data}) => dispatch(addStockMultipleData(data)))
            .catch(console.error)

export const getHistoryStockById = (produto_id) =>
    dispatch =>
        api.get(`/estoque/${produto_id}/registros`)
            .then(({data}) => dispatch(setSelectedStockProduct(data)))
            .catch(console.error)

export const setSearch = (nameDuck) =>
    dispatch => {
        console.log(nameDuck)
        dispatch(changeSearch(nameDuck))
    }
export const activateSearchAction = () =>
    dispatch =>
        dispatch(activateSearch())
export const deactivateSearchAction = () =>
    dispatch =>
		dispatch(deactivateSearch())

export const fetchLivroCaixaData = () =>
	dispatch=>
		api.get(`/livro_caixa/mes_atual`)
			.then(({data}) => dispatch(setLivroCaixaRegistros(data)))
            .catch(console.error)

export const fetchComprasData = () =>
	dispatch =>
		api.get('/compras')
			.then(({data}) => dispatch(getComprasData(data)))
            .catch(console.error)

export const fetchLivroCaixaDadosCompraSelecionada = (id) =>
	dispatch =>{
		return api.get(`/livro_caixa/resumo/${id}/compra`)
				.then(({data}) => dispatch(getLivroCaixaDadosCompraSeleciona(data)))
				.catch(console.error)
}

export const fecharCompraAction = (id) =>
	dispatch => {
		dispatch(alterarEstadoCompra({id, pago:1}))
	}

export const pagarCompraAction = (id, modo, valor) =>
	dispatch =>{
		api.post(`/compras/${id}/pagar`, {valor, modo, tipo_transacao: "entrada"})
			.then(({data}) => {
				dispatch(pagarCompra({data, id, modo, valor}))
				data.troco != undefined && dispatch(fecharCompraAction(id))
			})
			.catch(console.error)
}

export const adicionarNovaCompraAction = (nome, barqueiro, produtos) =>
	dispatch =>{
		api.post(`/compras`, {
				nome,
				barqueiro,
				produtos,
				"pago": 0
			})
		.then(({data}) => {
			dispatch(addNovaCompra(data))
			dispatch(resetNovaCompra())
			dispatch(adicionarUmaCompra(data))
			data.produtos.map(({produtos}) => {
				produtos.map(({dados}) => {
					dados.map(dado => {
						dispatch(updateNumberOfUnits({quantidade:dado.quantidade, id:dado.produto_id, modo:'saida'}))
					})

				})
			})
		})
		.catch(console.error)
	}
export const adicionarProdutoNovaCompraAction = (produto) =>
	dispatch =>{
		dispatch(addProdutoNovaCompra(produto))
	}

export const removerProdutoNovaCompraAction = (produto) =>
	dispatch =>{
		dispatch(removeProdutoNovaCompra(produto))
	}