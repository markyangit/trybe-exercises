const myFizzBuzz = require('../src/myFizzBuzz');

describe('testa a implementação da função myFizzBuzz', () => {
    it('Faz uma chamada com um número divisível por 3 e 5 e verifica se o retorno é o esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    })

    it('Faz uma chamada com um número divisível por 3 e verifica se o retorno é o esperado', () => {
        expect(myFizzBuzz(3)).toBe('fizz');
    })

    it('Faz uma chamada com um número divisível por 5 e verifica se o retorno é o esperado', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    })

    it('Faz uma chamada com um número que não é divisível por 3 ou 5 e verifica se o retorno é o esperado', () => {
        expect(myFizzBuzz(1)).toBe(1);
    })

    it('Faz uma chamada com um parâmetro que não é um número e verifica se o retorno é o esperado', () => {
        expect(myFizzBuzz('a')).toBeFalsy();
    })
})
