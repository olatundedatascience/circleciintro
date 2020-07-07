const {ranges, arrayToJson} = require("./functions")


describe("testing functions for circle ci", ()=> {
    it('should not be null', ()=>{
        const items = ranges(2, 10, 3)

        expect(items).toBeDefined()
        expect(items.length).toEqual(3)
    }) 

    it("should be part of returned data", ()=>{
        const items = ranges(0,100,5)
        
        expect(items.length).toBeGreaterThan(5)
        expect(items[1]).toEqual(5)
    })
// this run the test and test it...
    
})

describe("testing function that convert array to json", ()=>{
    it('should return viable json', ()=>{
        const jsonObject = arrayToJson([{name:"taye", location:"NG"}, {name:"Adu", location:"GH"}])

        expect(typeof(jsonObject)).toEqual("object")
        expect(jsonObject["code"]).toEqual("00")
    })

    it('should throw and return 99 as code meaning failure', ()=>{
        const jsonObject = arrayToJson(231)

        //expect(typeof(jsonObject)).toEqual("object")
        expect(jsonObject["code"]).toEqual("99")
    })
})