const { test, expect } = require('@jest/globals')
const app = require('../app.js')

test('should equal 5 when passed 2 and 3', () => {
    expect(app.add(2,3)).toBe(5);
});

test('should not equal Null', () => {
    expect(app.add(2,3)).not.toBe(null);
});

test('should make a number into a string', () => {
    expect(app.numStr(2)).toBe("2")
})

test("earth should be 3rd planet from the sun", ()=>{
    expect(app.planets[3]).toBe("earth")
})

