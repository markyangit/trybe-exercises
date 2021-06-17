const sum = require('../src/sum');

describe('testa a implementação da função de soma', () => {
    it('testa se a soma de 4 e 5 retorna 9', () => {
        expect(sum(4, 5)).toBe(9)
    })

    it('testa se a soma de 0 e 0 retorna 0', () => {
        expect(sum(0, 0)).toBe(0)
    })

    it("testa se a função lança algum erro quando os parâmetros são 4 e '5'", () => {
        expect(() => sum(4, '5')).toThrow();
    })

    it("testa se a mensagem de erro é 'parameters must be numbers' quando realizar a chamada de sum(4, '5')", () => {
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers')
    })
})
