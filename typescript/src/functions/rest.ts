// REST PARAMS

function totalVendas(venda1:number, venda2:number, venda3:number, venda4:number):number{
    const total = venda1+venda2+venda3+venda4;
    
    return total
}

// Na função totalVendas só é possivel passar 4 argumentos como parametro da função, tornando a função muito limitada.

function allVendas(...vendas:number[]): void{
    const qntVendas = vendas.length

    vendas.map((venda)=>{
        console.log(venda)
    })

    console.log(`Você fez ${qntVendas} vendas`)
}
// Na função allVendas como não é possivel saber o numero exato de vendas as vendas são passadas como REST PARAM (...vendas:number[])
// A função trata o REST PARAM como um array, então é possivel manipular o parametro como um array do tipo que foi passado(number).


