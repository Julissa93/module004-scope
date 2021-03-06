describe('yearsUntilRetirement', () => {
    it('returns a number', () => {
        let returnedValue = yearsUntilRetirement();
        expect(typeof returnedValue).toEqual('number');
    })
    it('returns the number 40', () => {
        let returnedValue = yearsUntilRetirement();
        expect(returnedValue).toEqual(40);
    })
})

describe('problem3', () => {
    it('returns the number 9', () => {
        let returnedValue = problem3();
        expect(returnedValue).toEqual(9);
    })
})
    
describe('test', () => {
    it('returns a number', () => {
        let returnedValue = test();
        expect(typeof returnedValue).toEqual('number');
    })
    it('returns the number 2', () => {
        let returnedValue = test();
        expect(returnedValue).toEqual(2);
    })
})

describe('first', () => {
    it('is a function', () => {
        expect(typeof first).toEqual('function');
    })
    it('returns the value of c', () => {
        let returnedValue = first();
        expect(returnedValue).toEqual('ccc');
    })
})