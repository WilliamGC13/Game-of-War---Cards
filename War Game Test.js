var expect = chai.expect;

describe("MyFunctions", function(){
    describe("#freshDeck", function(){
        it("should contain 52 items", function(){

            let deck = freshDeck()
            expect(deck.length).to.equal(52)
        })
    })
});
