const myRemoveWithoutCopy = require('../src/myRemoveWithoutCopy');

describe('testa a função myRemoveWithoutCopy', () => {
    it('testa se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })

    it('se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })

    it('faz uma chamada para a função myRemoveWithoutCopy e verifica se o array passado por parâmetro sofreu alterações', () => {
        const myArray = [1, 2, 3, 4];
        expect(myArray).toHaveLength(4);
        myRemoveWithoutCopy(myArray, 3);
        expect(myArray).toHaveLength(3);
    })

    it('testa se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
})
