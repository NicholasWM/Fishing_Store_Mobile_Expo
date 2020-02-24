module.exports = {
    //Produtos disponiveis/visualização do estoque
    produtos:[
        {
            "categoria": "Equipamentos de Pesca",
            "produtos": [
                {
                    "id": 1,
                    "nome": "Bucha 50 unidades",
                    "quantidade": 100,
                    "categoria": "Equipamentos de Pesca",
                    "imagem": "IMG-20180513-WA0003-1581721430817.jpeg",
                    "preco": 4
                }
            ]
        }
    ],
    //Notas de Compras
    notas:[
        {
            "id": 1,
            "nome": "Nicholas",
            "barqueiro": "Fabiano",
            "pago": false,
            "createdAt": "2020-02-18T18:07:33.000Z",
            "updatedAt": "2020-02-18T18:07:33.000Z",
            "produtos": [
                {
                    "categoria": "Equipamentos de Pesca",
                    "produtos": [
                        {
                            "id": 1,
                            "nome": "Bucha 50 unidades",
                            "categoria": "Equipamentos de Pesca",
                            "dados": [
                                {
                                    "id": 1,
                                    "quantidade": 5,
                                    "preco_total": 20,
                                    "createdAt": "2020-02-18T18:07:33.000Z",
                                    "updatedAt": "2020-02-18T18:07:33.000Z",
                                    "compra_id": 1,
                                    "produto_id": 1,
                                    "estoque_id": 1
                                }
                            ]
                        }
                    ]
                }
            ],
            "preco_total": 20
        }
    ]+,
    //historico_estoque
    estoque_historico:[],
    
}