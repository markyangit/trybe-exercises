const { obj1, obj2, obj3 } = require('../src/objects');

describe('testa igualdade entre objetos', () => {
    it('compara obj1 com obj2', () => {
        expect(obj1).toEqual(obj2);
    })

    it('compara obj1 com obj3', () => {
        expect(obj1).not.toEqual(obj3);
    })

    it('compara obj2 com obj3', () => {
        expect(obj2).not.toEqual(obj3);
    })
})
