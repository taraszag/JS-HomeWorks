describe("FizzBuzz", function () {
    it("number is a multiple of 3 returns “Fizz”", function () {
        const result = num(6);

        expect(result).to.equal("Fizz");
    });
    it("number is a multiple of 5 return “Buzz”",function() {
        const result = num(20);
        
        expect(result).to.equal("Buzz");
    })
})