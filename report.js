const { printDiffOrStringify } = require("jest-matcher-utils")

function printReport(pages) {
    console.log("=======")
    console.log("REPORT")
    console.log("=======")
    const sortedPages = sortPages(pages)
    for (const sortedPage of sortedPages) {
        const url = sortedPage[0]
        const hits = sortedPage[1]
        console.log(`Found ${hits} link to page: ${url}`)
    }
}


function sortPages(pages) {
    const pagesArr = Object.entries(pages)
    pagesArr.sort(function(a, b){
        aHits = a[1]
        bHits = b[1]
        return b[1] - a[1]
    })
    return pagesArr
}


module.exports = {
    sortPages,
    printReport
}