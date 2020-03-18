import api from '../../services/api'
import { addProducts, addProduct } from '../ducks/produtos'
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