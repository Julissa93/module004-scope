describe('getAge', () => {

    it('is a function', () => {
      expect(typeof getAge).toEqual('function');
    });

    it('returns a number', () => {
        let year = 1983;
        let returnedValue = getAge(year);
        expect(typeof returnedValue).toEqual('number')
    });

    it('returns the correct number', () => {
        let year = 1993;
        let returnedValue = getAge(year);
        expect(returnedValue).toEqual(26); 
    });

});

describe('calculateYearsUntilRetirement', () => {
    it('is a function', () => {
        expect(typeof calculateYearsUntilRetirement).toEqual('function');
    });

    it('returns a number', () => {
        let returnedValue = calculateYearsUntilRetirement(42);
        expect(typeof returnedValue).toEqual('number');
    });

    it('returns correct number of years until retirement', () => {
        let returnedValue = calculateYearsUntilRetirement(25);
        expect(returnedValue).toEqual(40);
    });
})

describe('third', () => {
    it('is a function', () => {
        expect(typeof third).toEqual('function');
    });

    it('returns the value of c', () => {
        let returnedValue = third();
        expect(returnedValue).toEqual('ccc');
    });
})

describe('showTxt', () => {

    it('is a function', () => {
        expect(typeof showTxt).toEqual('function');
    });

    it('returns the string: inside', () => {
        let returnedValue = showTxt();
        expect(returnedValue).toEqual('inside');
    });
    
})