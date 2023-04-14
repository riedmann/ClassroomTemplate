const sum = require('./index')

test("adding",()=>{
    expect(sum(1,2)).toBe(3);
})