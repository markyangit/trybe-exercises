const myRemove = require('../src/myRemove');

describe('testa a implementação da função myRemove', () => {
    it('testa se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })

    it('testa se a chamada myRemove([1, 2, 3, 4], 3) NÃO retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })

    it('testa se o array passado por parâmetro não sofreu alterações', () => {
        const myArray = [1, 2, 3, 4];
        myRemove(myArray, 3);
        expect(myArray).toContain(3);
    })

    it('testa se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
})
