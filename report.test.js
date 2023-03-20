const { SortPages} = require("./report.js")
const { test, expext } = require("@jest/globals")


test("sortPages 2 pages", function() {
    const input = {
        'https://wagslane.dev/path' : 1,
        'https://wagslane.dev' : 3
    }
    const actual = SortPages(input)
    const expected = [
        ['https://wagslane.dev' , 3],
        ['https://wagslane.dev/path' , 1]
    ]
    expect(actual).toEqual(expected)
})