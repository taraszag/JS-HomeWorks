describe("questions for Bob",function(){
    it ("Bob's response 'Of course'",function(){
        const result = ansver("How are you?");
        expect(result).to.equal("Of course")
    });
    it("Bob's response 'Wow relax!'", function(){
        const result = ansver("COME HERE!");
        expect(result).to.equal("Wow relax!")

    });
    it("Bob's response 'Calm down!'",function(){
        const result = ansver("ARE YOU NUTS?")
        expect(result).to.equal("Calm down,i know!")
    });
    it("Bob's response 'Good! let it be!'",function(){
        const result = ansver('')
        expect(result).to.equal("Good! let it be!")
    });

    it("Bob's response 'does not matter!'",function(){
        const result = ansver('123')
        expect(result).to.equal("does not matter!")
    });

})