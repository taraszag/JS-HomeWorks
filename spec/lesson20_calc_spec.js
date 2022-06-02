describe("calculator", function() {
    it("sum with no arguments should return 0", function() {
      const result = sum("");
  
      expect(result).to.equal(0);
    });
  
    it("sum with one argument should return it", function() {
      const result = sum("1234");
  
      expect(result).to.equal(1234);
    })
    it("sum with two arguments should return their sum", function () {
        const result = sum("12,34");
    
        expect(result).to.equal(46);
      })

      it("sum with five arguments should return their sum", function () {
        const result = sum("1,2,3,4,5");
    
        expect(result).to.equal(15);
      })
      it("sum should support new line symbol", function () {
        const result = sum("1\n2,3");
    
        expect(result).to.equal(15);
      })
      it("sum should support negative number at first position", function () {
        const result = sum("-1\n2,3");
    
        expect(result).to.equal(4);
      })
      it("sum should support custom delimiters", function () {
        const result = sum("/_\n1\n2_-3_4");
    
        expect(result).to.equal(0);
      })
  });