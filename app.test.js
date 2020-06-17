const ranges = require("./functions")


describe("testing functions for circle ci", ()=> {
    it('should not be null', ()=>{
        const items = ranges.ranges(2, 10, 3)

        expect(items).toBeDefined()
        expect(items.length).toEqual(3)
    }) 

    it("should be part of returned data", ()=>{
        const items = ranges.ranges(0,100,5)
        
        expect(items.length).toBeGreaterThan(5)
        expect(items[1]).toEqual(5)
    })
// this run the test and test it...
    
})