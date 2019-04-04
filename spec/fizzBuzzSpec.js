describe("My fizzbuzz solution", function() {
    
    beforeEach(() => {

        fuzz = new fizzBuzz();
        
    });
    
    describe("Checks if divisible by 3 and/or 5", function() {
        it('Should exist', () => {
            expect(fizzBuzz).toBeDefined();            
        });

        it('Sould return fizz if called with fizzBuzz(9)', () => {
            expect(fizzBuzz(9)).toEqual("Fizz");    
        });

        it('Should return buzz if called with fizzBuzz(10)', () => {
            expect(fizzBuzz(10)).toEqual("Buzz");
        });

        it('Should return FizzBuzz if called with fizzBuzz(15)', () => {
            expect(fizzBuzz(15)).toEqual("FizzBuzz");
        });

        it('should return num if num is not divisible by 3 or 5', () => {
            
            expect(fizzBuzz(11)).toEqual(11);
        });
    });
});