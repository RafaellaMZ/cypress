it('ASSÍNCRONO', () => {})

const getThing = callback => {
    setTimeout(() => {
        callback(12);
    }, 1000)
};

const system2 = () => {
    console.log('init'); 
    getThing(some => console.log(`Something is ${some}`));
    console.log ('end');
}

system2();