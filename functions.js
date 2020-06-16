const ranges = (start, stop, step =2) => {
    let items = []
    for(var i=start;i<=stop;i+=step) {
        items.push(i)
    }

    return items;
}
module.exports = {
    ranges:ranges
}