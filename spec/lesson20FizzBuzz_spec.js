describe("FizzBuzz", function () {
    it("number is a multiple of 3 returns “Fizz”", function () {
        const result = nums(12);

        expect(result).to.equal("Fizz");
    });
    it("number is a multiple of 5 return “Buzz”", function () {
        const result = nums(20);

        expect(result).to.equal("Buzz");
    })
    it("number is a multiple of both 3 and 5 return “FizzBuzz”", function () {
        const result = nums(15);
        expect(result).to.equal("FizzBuzz");
    })
})