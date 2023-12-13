//estoque.js
let estoque = {
    'joao' : [
        {'tipo':"maca", 'qtd': 1},
        {'tipo':"pera", 'qtd': 2},
    ],
    'maria' : [
        {'tipo':"maca", 'qtd': 2},
        { 'tipo': "banana", 'qtd': 4}
    ]
};

 export function getEstoque(){
    return structuredClone(estoque);
}

 export function transacao(origem,destino,quantidade,fruta){
    if(origem === 'pomar'){
        estoque[destino][0].qtd += quantidade;
    }
 }
//export {getEstoque}