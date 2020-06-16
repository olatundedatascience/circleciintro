const ranges = require("./functions")


describe("testing functions for circle ci", ()=> {
    it('should not be null', ()=>{
        const items = ranges.ranges(2, 10, 3)

        expect(items).toBeDefined()
        expect(items.length).toEqual(3)
    }) 

    
})