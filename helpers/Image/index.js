import {baseURL} from '../../services/api'
module.exports = {
    getImage: imagem => ({ uri: `${baseURL}/files/${imagem}` })
}