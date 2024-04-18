it('Promise async', () => {})

const getSomething = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(14);
        }, 1000)
    })
}

const system = async() => {
    console.log('init');
    const some = await getSomething();
    console.log(`Something is ${some}`);
    console.log('end');
}

system();