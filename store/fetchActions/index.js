import api from '../../services/api'
import { addProducts } from '../ducks/produtos'
export const getProductsByCategory = () => 
    dispatch => 
        api.get('/produtos/categorias')
            .then(({data}) => dispatch(addProducts(data)))
            .catch(console.log)