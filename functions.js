const ranges = (start, stop, step =2) => {
    let items = []
    for(var i=start;i<=stop;i+=step) {
        items.push(i)
    }

    return items;
}

const arrayToJson = (array=[]) => {
    const getType = typeof(array[0])
    let returnedObject = {}
   
    try {
        if(Array.isArray(array)) {
            returnedObject["data"] = array
            returnedObject["message"]= `elementSize: ${array.length}`
            returnedObject["code"] = "00"
            return returnedObject
        }
        else {
            returnedObject["data"] = 'element is not an array'
            returnedObject["message"]= `null`
            returnedObject["code"] = "99"
        
            return returnedObject
        }
           
    }
    catch(er) {
            returnedObject["data"] = er
            returnedObject["message"]= `null`
            returnedObject["code"] = "99"
        
            return returnedObject
    }
   
}

//console.log(arrayToJson([0,1,2,3]))


module.exports = {
    ranges:ranges,
    arrayToJson:arrayToJson
}

