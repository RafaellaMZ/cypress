it('sem testes, ainda', () => {})

const getSomething = callback => {
    setTimeout(() => {
        callback(13);
    }, 1000)
};

const system = () => {
    console.log('init'); //Primeiro iniciou
    getSomething(some => {console.log(`Something is ${some}`); //Pegou o valor de getSomething que é 13 e imprimiu esse valor, isso aqui é uma concatenação
    console.log ('end'); //Encerrou
})
}

system( );


