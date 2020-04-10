import api from '../../services/api'
import { addProducts, addProduct } from '../ducks/produtos'
import { addStockData,
         addStockMultipleData,
         setSelectedStockProduct,addItemToSelectedStockProduct
} from '../ducks/estoque'

import { 
    changeSearch, activateSearch, deactivateSearch
 } from '../ducks/search'
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
export const fetchAddStock = (insertData) => 
    dispatch => api.post('/estoque/registro', {...insertData, modo:'entrada'})
        .then(({data}) => dispatch(addItemToSelectedStockProduct({...data, modo:'entrada', quantidade:insertData.quantidade})))
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
// Others
